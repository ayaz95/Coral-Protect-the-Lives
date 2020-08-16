	var mapStyle = [
    {
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f5f5f2"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "color": "#71c8d4"
            }
        ]
    },
    {
        "featureType": "landscape",
        "stylers": [
            {
                "color": "#e5e8e7"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "stylers": [
            {
                "color": "#8ba129"
            }
        ]
    },
    {
        "featureType": "road",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#c7c7c7"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "color": "#a0d3d3"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "stylers": [
            {
                "color": "#91b65d"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "stylers": [
            {
                "gamma": 1.51
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.local",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road"
    },
    {
        "featureType": "road"
    },
    {},
    {
        "featureType": "road.highway"
    }
];
      var map,heatmap;
	  var AUSTRALIA_BOUNDS = {
	          north: -9.7491,
	          south: -44.1874,
	          west: 104.0238,
	          east: 166.3163,
	        };
	var drawLayerSite = null;
	var	propertyArray = []
	//marker sample data
	// const beaches = [
	//   ["Bondi Beach", -33.890542, 151.274856, 4],
	//   ["Coogee Beach", -33.923036, 151.259052, 5],
	//   ["Cronulla Beach", -34.028249, 151.157507, 3],
	//   ["Manly Beach", -33.80010128657071, 151.28747820854187, 2],
	//   ["Maroubra Beach", -33.950198, 151.259302, 1]
	// ];
    function initMap() {
        // load the map
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -37.4713, lng: 144.7852},
          zoom: 10,
          styles: mapStyle,
		  restriction: {
		              latLngBounds: AUSTRALIA_BOUNDS,
		              strictBounds: false,
		            }
        });
		// heatmap = new google.maps.visualization.HeatmapLayer({
		//   data: getPoints(),
		//   map: map
		// });
		setMarkers(map);
		loadMapShapes("./Waterways_Centreline.geojson");
		
      }
		
      /** Loads the state boundary polygons from a GeoJSON source. */
      function loadMapShapes(dataPath) {
		var data = null
		data = dataPath
		
		if (drawLayerSite && drawLayerSite.setMap){
			 drawLayerSite.setMap(null);
		}
		   
	    drawLayerSite = new google.maps.Data({map: map
		 });
		
		var myLatlng = {lat: -37.4713, lng: 144.7852};
		var featureProperties = ""
		var infoWindow = new google.maps.InfoWindow(
		            {content: 'Click the map to get more information', position: myLatlng});
		infoWindow.open(map);

		drawLayerSite.addListener('mouseover', function(mapsMouseEvent) {
		          // Close the current InfoWindow.
		          infoWindow.close();
				  featureProperties = ""
		          // Create a new InfoWindow
		          infoWindow = new google.maps.InfoWindow({position: mapsMouseEvent.latLng,maxWidth: 245});
				  mapsMouseEvent.feature.forEachProperty(function(value,property) {
						  if(property=='ASSET_NAME'){
							featureProperties = "\n" + featureProperties + property + ":" + value + "\n";
						  }
				  });
		          infoWindow.setContent(featureProperties);
		          infoWindow.open(map);
		        });
		
		// drawLayerSite.addListener('click', function(mapsMouseEvent) {
		// 		 propertyArray = []
		// 		 //River 表格展示数据集
		// 		 riverProperty = []
		// 		 offencesType = []
		// 		 propertyName = []
				 
		// 		 barName = []
		// 		 barValue = []

				 
		// 		 // myChart.clear();
		// 		 // changeChartFlag = false;
		//          infoWindow.close();
		// 		 mapsMouseEvent.feature.forEachProperty(function(value,property) {
		// 				if(value==null){
		// 					value = 0
		// 				}
		// 				propertyArray.push({'value':value,'name':property})
		// 		  });
				  
		// 		  riverProperty = propertyArray;
		// 		  // for(let i=0;i<riverProperty.length;i++){
		// 			  // if(riverProperty[i]['name'] == 'POSTCODE'){
		// 				 //  postcode = riverProperty.splice(i,1).slice()	  
		// 			  // }
		// 			  // if(riverProperty[i]['name'] == 'month_year'){
		// 				 //  saYear = riverProperty.splice(i,1).slice();
		// 			  // }
		// 			  // if(riverProperty[i]['name'] == 'OBJECTID'){
		// 				 //  riverProperty.splice(i,1)
		// 			  // }
		// 			  // if(riverProperty[i]['name'] == 'total_offences'){
		// 				 //  riverProperty.splice(i,1)
		// 			  // }
		// 		  // }
		// 		  for(let i=0;i<riverProperty.length;i++){
		// 			  if(riverProperty[i]['name']=='OBJECTID'){
		// 				  barName.push(riverProperty[i]['name'])
		// 				  barValue.push(riverProperty[i]['value'])
		// 			  }
		// 		  }
		// 		 myChart.setOption({
		// 		 		title: {
		// 		 			text: 'Litter Category',
		// 		 			// subtext: saYear[0]["value"] + ' postcode: '+ postcode,
		// 		 			left: 'center'
		// 		 		},
		// 		 		tooltip: {
		// 		 			trigger: 'item',
		// 		 			formatter: '{a} <br/>{b} : {c} ({d}%)'
		// 		 		},
		// 		 		// legend: {
		// 		 		// 	orient: 'vertical',
		// 		 		// 	left: 'right',
		// 		 		// 	data: propertyName
		// 		 		// }, 
		// 		 		series: [
		// 		 			{
		// 		 				name: 'type',
		// 		 				type: 'pie',
		// 		 				radius: '65%',
		// 		 				center: ['50%', '62%'],
		// 		 				data: riverProperty,
		// 		 				emphasis: {
		// 		 					itemStyle: {
		// 		 						shadowBlur: 300,
		// 		 						shadowOffsetX: 0,
		// 		 						shadowColor: 'rgba(0, 0, 0, 0.5)'
		// 		 				}
		// 		 			},
		// 					}
		// 		 		]
		// 		 });
		// 		show()
		//         });
		// set up the style rules and events for google.maps.Data
		drawLayerSite.setStyle({
		  fillColor: '#5DADE2',
		  fillOpacity: 0.8,
		  strokeWeight: 4,
		  strokeColor: '#5DADE2',
		  strokeOpacity: 0.6
		});
		
		drawLayerSite.addListener('mouseover', function(event) {
				drawLayerSite.revertStyle();
				drawLayerSite.overrideStyle(event.feature, {strokeWeight: 3, strokeColor:'#FBFCFC'});
		        });
		drawLayerSite.addListener('mouseout', function(event) {
			infoWindow.close();
		  drawLayerSite.revertStyle();
		});
		drawLayerSite.loadGeoJson(data);
		
		// wait for the request to complete by listening for the first feature to be
        // added
        // google.maps.event.addListenerOnce(map.data, 'addfeature', function() {
        //   google.maps.event.trigger(document.getElementById('census-variable'),
        //       'change');
        // });
      }
		
	var markerArray = [];
	
	//load marker
	function setMarkers(map) {
	  // Adds markers to the map.
	  // Marker sizes are expressed as a Size of X,Y where the origin of the image
	  // (0,0) is located in the top left of the image.
	  // Origins, anchor positions and coordinates of the marker increase in the X
	  // direction to the right and in the Y direction down.
	  // const image = {
	  //   url:
	  //     "https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_red"+uni_marker[2]+".png",
	  //   // This marker is 20 pixels wide by 32 pixels high.
	  //   size: new google.maps.Size(20, 32),
	  //   // The origin for this image is (0, 0).
	  //   origin: new google.maps.Point(0, 0),
	  //   // The anchor for this image is the base of the flagpole at (0, 32).
	  //   anchor: new google.maps.Point(0, 32)
	  // };
	  // Shapes define the clickable region of the icon. The type defines an HTML
	  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
	  // The final coordinate closes the poly by connecting to the first coordinate.
	  const shape = {
	    coords: [1, 1, 1, 20, 18, 20, 18, 1],
	    type: "poly"
	  };
	 start_date = document.getElementById("start_date").value;
	 end_date = document.getElementById("end_date").value;
	 let requestURL = 'http://vm2.uom.mrryan.cn:11233/mapdata/range?'+'start_date="'+start_date+'"&'+'end_date="'+end_date+'"';
	 let http = new XMLHttpRequest();
	 http.open('GET', requestURL);
	 http.responseType = 'text';
	 http.send();

	 //处理来自服务器的数据
	 var locationArray = new Array();
	 http.onreadystatechange = function() {
	 	if(this.readyState==4 && this.status==200){

	 		markerArray = eval(http.response)
			for (let i = 0; i < markerArray.length; i++) {
			  const uni_marker = markerArray[i];
			  console.log("uni_marker:"+uni_marker)
			  if(uni_marker[3]>=100){
				  uni_marker.push('B0171F');
				  uni_marker.push('FFFFFF');
			  }
			  else if(uni_marker[3]>=50){
				  uni_marker.push('FF9912');
				  uni_marker.push('000000');
			  }else{
				  uni_marker.push('00FF00');
				  uni_marker.push('000000');
			  }
			  const marker = new google.maps.Marker({
			    position: { lat: uni_marker[0], lng: uni_marker[1] },
			    map,
			    icon: {
						url:
						  "http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld="+uni_marker[3]+"|"+uni_marker[4]+"|"+uni_marker[5],
						// This marker is 20 pixels wide by 32 pixels high.
						size: new google.maps.Size(20, 32),
						// The origin for this image is (0, 0).
						origin: new google.maps.Point(0, 0),
						// The anchor for this image is the base of the flagpole at (0, 32).
						anchor: new google.maps.Point(0, 32)
					  },
			    shape: shape,
			    title: 'Monitor'
			    // zIndex: uni_marker[3]
			  });
			  const infowindow = new google.maps.InfoWindow({
			            content: 'Amounts of Hazardous Litter:' + uni_marker[3] + '\n' + 'Amounts of Nonhazardous Litter:' + uni_marker[2],
			            maxWidth: 260
			  });
			  marker.addListener("mouseover", () => {
			  		  infowindow.open(map, marker);
			          });
			  marker.addListener("mouseout", () => {
			  		infowindow.close()	  
			          });
			  marker.addListener("click", () => {
			  		 riverProperty = []
			  		 barName = ['harzardous','nonharzardous']
			  		 barValue = [uni_marker[3],uni_marker[2]]
			  		 riverProperty.push({'name':"harzardous",'value':uni_marker[3]})
					 riverProperty.push({'name':"nonharzardous",'value':uni_marker[2]})
			  		 myChart.clear();
			  		 changeChartFlag = false;
			  		 // infoWindow.close();
			  		 // mapsMouseEvent.feature.forEachProperty(function(value,property) {
			  			// 	if(value==null){
			  			// 		value = 0
			  			// 	}
			  			// 	propertyArray.push({'value':value,'name':property})
			  		 //  });
			  		  
			  		 //  riverProperty = propertyArray;
			  		 //  for(let i=0;i<riverProperty.length;i++){
			  			//   if(riverProperty[i]['name']=='OBJECTID'){
			  			// 	  barName.push(riverProperty[i]['name'])
			  			// 	  barValue.push(riverProperty[i]['value'])
			  			//   }
			  		 //  }
			  		 myChart.setOption({
			  		 		title: {
			  		 			text: 'Amounts of Harzardous or Nonharzardous Litter',
			  		 			// subtext: saYear[0]["value"] + ' postcode: '+ postcode,
			  		 			left: 'center'
			  		 		},
			  		 		tooltip: {
			  		 			trigger: 'item',
			  		 			formatter: '{a} <br/>{b} : {c} ({d}%)'
			  		 		},
			  		 		// legend: {
			  		 		// 	orient: 'vertical',
			  		 		// 	left: 'right',
			  		 		// 	data: propertyName
			  		 		// }, 
			  		 		series: [
			  		 			{
			  		 				name: 'type',
			  		 				type: 'pie',
			  		 				radius: '65%',
			  		 				center: ['50%', '50%'],
			  		 				data: riverProperty,
			  		 				emphasis: {
			  		 					itemStyle: {
			  		 						shadowBlur: 300,
			  		 						shadowOffsetX: 0,
			  		 						shadowColor: 'rgba(0, 0, 0, 0.5)'
			  		 				}
			  		 			},
			  					}
			  		 		]
			  		 });
			  		show();
			  });
	 	}
	}
	}
	 
	 
	 
		
	  }
	  
	  
	  
	function getMarkers() {
			let requestURL = 'http://vm2.uom.mrryan.cn:11233/mapdata/range';
			let http = new XMLHttpRequest();
			http.open('GET', requestURL);
			http.responseType = 'text';
			http.send();
			//处理来自服务器的数据
			var locationArray = new Array();
			
			http.onreadystatechange = function() {
				if(this.readyState==4 && this.status==200){
					markerArray = http.response
					
				}
					
					
			 //        let crimeJson = JSON.parse(crimeText);
			 //        let rows = crimeJson['rows']
				// 	for (let i = 0; i < rows.length; i++){
				// 		for(let j=0; j< rows[i]['value'];j++){
				// 			locationArray.push(rows[i]['key'][1])
				// 		}
				// 	}
				// 	console.log(locationArray.length)
				// 	for(let i = 0; i < locationArray.length; i++){
				// 		result.push(new google.maps.LatLng(locationArray[i][1],locationArray[i][0]))
				// }
			}
	}
	
      /**
       * Applies a gradient style based on the 'census_variable' column.
       * This is the callback passed to data.setStyle() and is called for each row in
       * the data set.  Check out the docs for Data.StylingFunction.
       *
       * @param {google.maps.Data.Feature} feature
       */
      function styleFeature(feature) {
        var low = [5, 69, 54];  // color of smallest datum
        var high = [151, 83, 34];   // color of largest datum

        // delta represents where the value sits between the min and max
        // var delta = (feature.getProperty('census_variable') - censusMin) /
        //     (censusMax - censusMin);

        var color = [];
        for (var i = 0; i < 3; i++) {
          // calculate an integer color based on the delta
          color[i] = (high[i] - low[i]) * delta + low[i];
        }


        return {
          strokeWeight: outlineWeight,
          strokeColor: '#fff',
          zIndex: zIndex,
          fillColor: 'hsl(' + color[0] + ',' + color[1] + '%,' + color[2] + '%)',
          fillOpacity: 0.75,
          visible: showRow
        };
      }

	  // heatmap-js
	  function toggleHeatmap() {
	    heatmap.setMap(heatmap.getMap() ? null : map);
	  }
	  function getPoints() {
	  		let requestURL = 'https://storage.googleapis.com/aurin_data/twitter/crime_by_date_loc_lang.json'
	  		let http = new XMLHttpRequest();
	  		http.open('GET', requestURL);
	  		http.responseType = 'text';
	  		http.send();
	  		//处理来自服务器的数据
	  		var locationArray = new Array();
	  		var result = []
	  		http.onload = function() {
	  		        let crimeText = http.response;
	  		        let crimeJson = JSON.parse(crimeText);
	  		        let rows = crimeJson['rows']
	  				for (let i = 0; i < rows.length; i++){
	  					for(let j=0; j< rows[i]['value'];j++){
	  						locationArray.push(rows[i]['key'][1])
	  					}
	  				}
	  				console.log(locationArray.length)
	  				for(let i = 0; i < locationArray.length; i++){
	  					result.push(new google.maps.LatLng(locationArray[i][1],locationArray[i][0]))
	  			}
	  		}
	    return result
	  }
	  
      function changeGradient() {
        var gradient = [
          'rgba(0, 255, 255, 0)',
          'rgba(0, 255, 255, 1)',
          'rgba(0, 191, 255, 1)',
          'rgba(0, 127, 255, 1)',
          'rgba(0, 63, 255, 1)',
          'rgba(0, 0, 255, 1)',
          'rgba(0, 0, 223, 1)',
          'rgba(0, 0, 191, 1)',
          'rgba(0, 0, 159, 1)',
          'rgba(0, 0, 127, 1)',
          'rgba(63, 0, 91, 1)',
          'rgba(127, 0, 63, 1)',
          'rgba(191, 0, 31, 1)',
          'rgba(255, 0, 0, 1)'
        ]
        heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
      }

      function changeRadius() {
        heatmap.set('radius', heatmap.get('radius') ? null : 20);
      }

      function changeOpacity() {
        heatmap.set('opacity', heatmap.get('opacity') ? null : 0.2);
      }
	  
	  
	  
	  
	  