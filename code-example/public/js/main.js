
//Initializing the map
function setMap() {

      console.log('Loading map');

      mapboxgl.accessToken = 'pk.eyJ1IjoibWF0aGlsZG8iLCJhIjoiY2lrdHZvMHdsMDAxMHdvbTR0MWZkY3FtaCJ9.u4bFYLBtEGNv4Qaa8Uaqzw';
      var map = new mapboxgl.Map({
            container: 'map', // container id
            style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
            center: [10.74812, 59.92145], // starting position [lng, lat]
            zoom: 14 // starting zoom
      });
      //var map = L.map('map').setView([58.969976, 5.733107], 14);
      //Set view takes two parameters;
            //1. The coordinates for the center of the map
            //2. The zoom level. Zoomlevel is from 0 -> 22, where 22 is zoomed in an 0 is zoomed out

      //Adding geoJSON layer to the map:
      //L.geoJSON(restaurants).addTo(map);

      map.on('load', function(){
            map.addLayer(createMapboxLayer(osloUtesteder));
      });
      map.on('click', 'utesteder', function (e) {
            var coordinates = e.features[0].geometry.coordinates.slice();
            var description = "<h4>"+e.features[0].properties.name+"</h3>";
    
            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }
    
            new mapboxgl.Popup()
                .setLngLat(coordinates)
                .setHTML(description)
                .addTo(map);
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
            'layout': {
                  
            }
      }
      return layer;
};

window.onload = setMap;
