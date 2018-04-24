
//Initializing the map
function setMap() {

      console.log('Loading map');

      mapboxgl.accessToken = 'pk.eyJ1IjoibWF0aGlsZG8iLCJhIjoiY2lrdHZvMHdsMDAxMHdvbTR0MWZkY3FtaCJ9.u4bFYLBtEGNv4Qaa8Uaqzw';
      var map = new mapboxgl.Map({
            container: 'map', // container id
            style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
            center: [10.74812, 59.92145], // starting position [lng, lat]
            zoom: 14 // starting zoom. Zoomlevel is from 0 -> 22, where 22 is zoomed in an 0 is zoomed out
      });
      //Adding navigation controls
      map.addControl(new mapboxgl.NavigationControl());

      //Adding geoJSON layer to the map:
      map.on('load', function(){
            map.addLayer(createMapboxLayer(osloUtesteder));
      });
}

function createMapboxLayer(geojson) {
      var layer =  {
            'id': 'utesteder',
            'type': 'circle',
            'source': {
                  'type': 'geojson',
                  'data': geojson
            },
            'layout': { //styling of the features
            }
      }
      return layer;
};

window.onload = setMap;

