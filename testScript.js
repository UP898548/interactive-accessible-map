function beginTesting(){
  if(map != null){
    console.log("TEST 1: PASSED")
  } else {
    console.log("TEST 1: FAIL")
  }

  testTwo();
}

function testTwo(){
  var testDiv = document.createElement('div');
  testDiv.className = 'testMarkerHolder';

  var testJson = {
    'type':'geojson',
    'data': {
      'type': 'FeatureCollection',
      'features': [{
        'type': 'Feature',
        'properties': {
          'title': 'TEST_1',
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [-0.0569165, 51.5470792]
        }
      },
      {
        'type': 'Feature',
        'properties': {
          'title': 'TEST_2',
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [-0.1, 51.5472]
        }
      }]
    }
  };

  var testLine = {
      'type' : 'geojson',
      'data' : {
        'type':'FeatureCollection',
        'features': [{
          'type': 'Feature',
          'properties': {
            'id' : 'testLine',
          },
          'geometry': {
            'type': 'LineString',
            'coordinates': [
              [-0.0569165, 51.5470792],
              [-0.1, 51.5472]
          ]
        }
      }]
    }
  };

  for(j = 0; j < 2; j++){
    var el = document.createElement('div');
    el.className = 'testMarker';

    new mapboxgl.Marker(el)
      .setLngLat(testJson.data.features[j].geometry.coordinates)
      .addTo(map);
  }

  map.addSource('lineTester', testLine);

  map.addLayer({
    'id': 'lineTester',
    'type': 'line',
    'source': 'lineTester',
    'layout': {
      'line-join': 'round',
      'line-cap': 'round',
      'visibility': 'visible'
    },
    'paint': {
      'line-color': 'rgb(0,0,0)',
      'line-width': 5
    }
  })

  if(testLine.data.features[0].geometry.coordinates != null){
    console.log("TEST 2: PASSED")
  } else {
    console.log("TEST 2: FAIL")
  }

  var markerOne = new mapboxgl.Marker().setLngLat([-0.0569165, 51.5470792]).addTo(map);
  var markerTwo = new mapboxgl.Marker().setLngLat([-0.1, 51.5472]).addTo(map);

  testThree(markerOne, markerTwo);
}

function testThree(mOne, mTwo){
  mOne.setPopup(new mapboxgl.Popup({offset:5}).setHTML("<h1>TEST_1</h1>")).addTo(map);
  mTwo.setPopup(new mapboxgl.Popup({offset:5}).setHTML("<h1>TEST_2</h1>")).addTo(map);

  var mOneText = mOne._popup._content.childNodes[0].innerText;
  var mTwoText = mTwo._popup._content.childNodes[0].innerText;

  if(mOneText === "TEST_1" && mTwoText === "TEST_2"){
    console.log("TEST 3: PASSED");
  } else {
    console.log("TEST 3: FAIL");
  }

  testFour(mOne, mTwo);
}

function testFour(mOne, mTwo){
  var clickedLayer = "lineTester";

  var visibility = map.getLayoutProperty(
    clickedLayer,
    'visibility'
  );

  if (visibility === 'visible') {
    map.setLayoutProperty(
      clickedLayer,
      'visibility',
      'none'
    );
    this.className = '';
  } else {
    this.className = 'active';
    map.setLayoutProperty(
      clickedLayer,
      'visibility',
      'visible'
    );
  }

  var testOne = visibility;

  var visibility2 = map.getLayoutProperty(
    clickedLayer,
    'visibility'
  );

  if (visibility2 === 'visible') {
    map.setLayoutProperty(
      clickedLayer,
      'visibility',
      'none'
    );
    this.className = '';
  } else {
    this.className = 'active';
    map.setLayoutProperty(
      clickedLayer,
      'visibility',
      'visible'
    );
  }
  var testTwo = visibility2;

  if((testOne == 'visible' && testTwo == 'none') || (testOne == 'none' && testTwo == 'visible')){
    console.log("TEST 4: PASSED");
  } else {
    console.log("TEST 4: FAIL");
  }

  testFive(mOne, mTwo);
}

function testFive(mOne, mTwo){
  let markers = document.getElementsByClassName('testMarker');

  if(markers[0].style.visibility == null || markers[0].style.visibility == "visible"){
    for(i = 0; i<markers.length; i++){
      markers[i].style.visibility = "hidden";
    }
  } else {
    for(i = 0; i<markers.length; i++){
      markers[i].style.visibility = "visible";
    };
  }

  var visOne = markers[0].style.visibility;

  if(markers[0].style.visibility == null || markers[0].style.visibility == "visible"){
    for(i = 0; i<markers.length; i++){
      markers[i].style.visibility = "hidden";
    }
  } else {
    for(i = 0; i<markers.length; i++){
      markers[i].style.visibility = "visible";
    };
  }
  var visTwo = markers[0].style.visibility;

  if((visOne == 'hidden' || visOne == 'visible') && (visTwo != visOne)){
    console.log("TEST 5: PASSED");
  } else {
    console.log("TEST 5: FAIL")
  }

  testSix();
}

function testSix(){
  setTextColour('#FF0000');

  var a = document.getElementsByClassName('test');

  if(a[0].style.color == 'rgb(255, 0, 0)'){
    console.log("TEST 6: PASSED");
  } else {
    console.log("TEST 6: FAIL")
  }
}
