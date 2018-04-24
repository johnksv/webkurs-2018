
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

      map.onLoad('load', function(){
            map.addLayer(osloUtesteder);
      });
}

window.onload = setMap;
