// global var googleMaps
var googlemaps;

// is de library ingeladen? --> initialiseer
google.maps.event.addDomListener(window,'load', initMaps);

/*
* Initialiseer de Google Maps
*/

function initMaps(){

    // div met id divMap declareren in JavaScript
    var map = document.getElementById('map');

    var mapOption = {
        zoom: 12,
        center: new google.maps.LatLng(44.9884061, -93.27727299999998) 
        // LET GOED OP DE HOOFDLETTERS L EN L
    };

    googlemaps = new google.maps.Map(map, mapOption);


    // json inladen en via de callback functie de mapstijlen aanpassen
    fetchJSONDerulo('https://api.myjson.com/bins/xbpb1', function(styles){

        googlemaps.setOptions({
            styles: styles
        })

    });
}

var fieldSelect= document.getElementById('styles');

function changeMapStyles(event){

    // waarde van het selectieveld:
    var  pathToJsonFile = fieldSelect.value;
}

function fetchJSONDerulo(path, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send(); 

    function initMap() {
        var myLatLng = {lat: 44.9884061, lng:-93.27727299999998};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: myLatLng
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Hello World!'
        });
      }
}

