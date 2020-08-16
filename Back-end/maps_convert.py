import numpy as np
import pymysql
import json
import random

def haversine_array(lat1, lng1, lat2, lng2):
    lat1, lng1, lat2, lng2 = map(np.radians, (lat1, lng1, lat2, lng2))
    AVG_EARTH_RADIUS = 6371  # in km
    lat = lat2 - lat1
    lng = lng2 - lng1
    d = np.sin(lat * 0.5) ** 2 + np.cos(lat1) * np.cos(lat2) * np.sin(lng * 0.5) ** 2
    h = 2 * AVG_EARTH_RADIUS * np.arcsin(np.sqrt(d))
    return h

def dummy_manhattan_distance(lat1, lng1, lat2, lng2):
    a = haversine_array(lat1, lng1, lat1, lng2)
    b = haversine_array(lat1, lng1, lat2, lng1)
    return a + b

def datafetch(start,end): 
    db = pymysql.connect(host="115.146.93.33",port=10188,user="govhack",password="govhack2020",db="govhack")
    cursor = db.cursor()
    cursor.execute("select distinct(la), lo, sum(count) as \"nonharm\" from data where type = \"Non-Hazardous\" and date between {} and {} group by la;".format(start,end))
    nonharm_tupl = cursor.fetchall()
    cursor.execute("select distinct(la), lo, sum(count) as \"nonharm\" from data where type = \"Hazardous\" and date between {} and {} group by la;".format(start,end))
    harm_tupl = cursor.fetchall()
    db.commit()
    db.close()
    nonharm_data = [list(i) for i in nonharm_tupl]
    harm_data = [list(i) for i in harm_tupl]
    combine_data = combine_func(nonharm_data, harm_data)
    near_river_data = find_near_river(combine_data)
    return near_river_data

def combine_func(nonharm_data, harm_data):
    for i in range(len(nonharm_data)):
        flag = 0
        for j in range(len(harm_data)):
            if flag == 0:
                if nonharm_data[i][0] == harm_data[j][0] and nonharm_data[i][1] == harm_data[j][1]:
                    nonharm_data[i] = [nonharm_data[i][0], nonharm_data[i][1], nonharm_data[i][2], harm_data[j][2]]
                    harm_data[j][0] = "checked"
                    flag = 1
                    # print(i, j)
                else:
                    nonharm_data[i] = [nonharm_data[i][0], nonharm_data[i][1], nonharm_data[i][2], 0]
                    # print(i, j)
                # print(nonharm_data[i])

    for k in range(len(harm_data)):
        if harm_data[k][0] != "checked":
            harm_data[k].append(0)
            nonharm_data.append(harm_data[k])
    return nonharm_data

def find_near_river(combiane_data):
    with open("./Waterways_Centreline.json") as f:
        data = json.load(f)
    for i in range(len(combiane_data)):
        ori_lo = combiane_data[i][1]
        ori_la = combiane_data[i][0]
        # Fetch from fast query
        db = pymysql.connect(host="115.146.93.33",port=10188,user="govhack",password="govhack2020",db="govhack")
        cursor = db.cursor()
        cursor.execute("select after_la, after_lo from fast_matching where ori_la = \"{}\" and ori_lo = \"{}\";".format(float(ori_la),float(ori_lo)))
        temp_data = cursor.fetchone()
        db.commit()
        if temp_data is None:
            # print("temp data is none")
            # Calculation
            nearest_lo = 0
            nearest_la = 0
            min_distance = 999999999
            for j in range(len(data['features'])):
                random_num = random.randint(0,len(data['features'][j]['geometry']['coordinates'])-1)
                river_la = data['features'][j]['geometry']['coordinates'][random_num][1]
                river_lo = data['features'][j]['geometry']['coordinates'][random_num][0]
                current_distance = dummy_manhattan_distance(float(ori_la), float(ori_lo), float(river_la), float(river_lo))
                if current_distance < min_distance:
                    min_distance = current_distance
                    nearest_la = river_la
                    nearest_lo = river_lo
            combiane_data[i][1] = nearest_lo
            combiane_data[i][0] = nearest_la
            # Save to DB
            cursor.execute("INSERT INTO fast_matching "+
                "(ori_la,ori_lo,after_la,after_lo) "+
                "VALUES "+
                "('{}','{}','{}','{}');".format(ori_la,ori_lo,nearest_la,nearest_lo))
            db.commit()
        else:
            # print("temp data is not none")
            nearest_la = temp_data[0]
            nearest_lo = temp_data[1]
        combiane_data[i][1] = float(nearest_lo)
        combiane_data[i][0] = float(nearest_la)
        db.close()
    return combiane_data

if __name__ == "__main__":
    data = datafetch("\"2000-02-22\"","\"2022-02-24\"")
    print(data)
