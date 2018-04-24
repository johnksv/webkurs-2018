
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

      map.addControl(new mapboxgl.NavigationControl());

      //Adding geoJSON layer to the map:
      map.on('load', function(){
            map.addLayer(createMapboxLayer("utesteder", "circle", osloUtesteder));
            map.addLayer(createMapboxLayer("parker", "fill", parker));
      });
      map.on('click', 'utesteder', function (e) {
            var coordinates = e.features[0].geometry.coordinates.slice();
            var description = e.features[0].properties.name;
            
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

function createMapboxLayer(name, type, geojson) {
      var layer =  {
            'id': name,
            'type': type,
            'source': {
                  'type': 'geojson',
                  'data': geojson
            },
            'paint': {
                  'circle-radius': 10,
                  'circle-color': 'red',
                  'circle-opacity':{
                        'stops': [
                              [7, 1],
                              [17, 0.2]
                        ]
                  }
            }
      }
      return layer;
};

window.onload = setMap;
