var googlemaps;

google.maps.event.addDomListener(window,'load', initMaps);


function initMaps(){

    var map = document.getElementById('map');

    var mapOption = {
        zoom: 12,
        center: new google.maps.LatLng(44.9884061, -93.27727299999998) 

    };

    googlemaps = new google.maps.Map(map, mapOption);

    fetchJSONDerulo('https://api.myjson.com/bins/xbpb1', function(styles){

        googlemaps.setOptions({
            styles: styles
        })

    });
}

var fieldSelect= document.getElementById('styles');

function changeMapStyles(event){

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

}

