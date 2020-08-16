from os import curdir
import pymysql
import json
import datetime
from flask import Flask, request, jsonify, session, escape, url_for, redirect, render_template
from flask_cors import CORS
import pandas as pd
import time
import maps_convert

#后端服务启动
app = Flask(__name__)
CORS(app, resources=r'/*')

# Set the secret key to some random bytes. Keep this really secret!
app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'

@app.route('/')
def welcome():
    return 'Team 992 Backend. GovHack 2020.'

@app.route('/mapdata/range', methods = ['GET'])
def get_all_info():
    try:
        if request.method == "GET":
            try:
                start_date = request.args.get('start_date')
                end_date = request.args.get('end_date')
                if start_date is None or start_date == "" or start_date == "\"\"":
                    start_date = "\"2000-01-01\""
                if end_date is None or end_date == "" or end_date == "\"\"":
                    end_date = "\"2099-01-01\""
                data = maps_convert.datafetch(start_date,end_date)
                return jsonify(data)
            except Exception as e:
                print(e)
                return "Fails"+str(e)
    except Exception as e:
        print(e)
        return "Fails"+str(e)

if __name__ == "__main__":
    # app.run(host='45.113.234.137',port=11233, debug = False)
    print("Good bye!")
    app.run(host='0.0.0.0',port=9090, debug = True)