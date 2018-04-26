
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
      
      var paint = {
            'circle-radius': 8,
            'circle-color': 'red',
            'circle-opacity': 0.5
      };
      var paint_red = {
            "fill-color": "red",
          'fill-opacity': 0.25
      };

      map.on('load', function(){
            map.addLayer(createMapboxLayer('parker', 'fill', parker, {'fill-opacity': 0.25}));

            map.loadImage("img/beer.png", (error, image) => {
                  if (error) throw error;
                  map.addImage('beer', image);
                  const layout = {
                        "icon-image": "beer",
                        "icon-size": 0.075,
                        "icon-allow-overlap": true
                    };
                  map.addLayer(createMapboxLayer('utesteder', 'symbol', osloUtesteder, false, layout));
            });

            map.loadImage("img/fastfood.png", (error, image) => {
                  if (error) throw error;
                  map.addImage('fastfood', image);
                  const layout = {
                        "icon-image": "fastfood",
                        "icon-size": 0.08,
                        "icon-allow-overlap": true
                    };
                  map.addLayer(createMapboxLayer('fastfood', 'symbol', fastfood, false, layout));
            });

      });

      map.on("click", "utesteder", function (event) {
            var content = event.features[0].properties.name;
            var coordinates = event.features[0].geometry.coordinates.slice();
            new mapboxgl.Popup().setLngLat(coordinates).setHTML(content).addTo(map);
      });


      map.on("click", "fastfood", function (event) {
            var content = event.features[0].properties.name;
            var coordinates = event.features[0].geometry.coordinates.slice();
            new mapboxgl.Popup().setLngLat(coordinates).setHTML(content).addTo(map);
      });

      map.on("click", "parker", function (event) {
          var content = event.features[0].properties.name;
          var coordinates = event.lngLat;
          var pol = event.features[0].geometry.coordinates;
          var polygon = turf.polygon(pol);

          var area = Math.round(turf.area(polygon));
          new mapboxgl.Popup().setLngLat(coordinates).setHTML("Areal er : " + area + " kvm").addTo(map);
      })


}

function createMapboxLayer(id, type, geojson, paint = false, layout = false) {
      var layer =  {
            'id': id,
            'type': type,
            'source': {
                  'type': 'geojson',
                  'data': geojson
            },
            'paint': (paint) ? paint : {},
            'layout': (layout) ? layout : {},
      }
      
      return layer;
};

window.onload = setMap;
