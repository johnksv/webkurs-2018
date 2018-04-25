# Norkart-webkurs

## Oppgave
Lag en nettside som på best mulig måte viser dine topp utesteder for oslo-sommer. Ta utganspunkt i koden som ligger i mappen [task-boilerplate](./task-boilerplate).

## Kjøre koden
Last ned koden ved å trykke "Clone or Download". Deretter last ned zip, eller clone hvis du har git installert. Når koden er lastet ned kan du gå inn i mappen som heter `task-boilerplate` og åpne `index.html` i nettleseren, og du er i gang!

## Mapbox API og eksempler <a name="tutorial"> </a>
[Mapbox GL JS api](https://www.mapbox.com/mapbox-gl-js/api)

[Eksempeler](https://www.mapbox.com/mapbox-gl-js/example/simple-map/)

## Bibliotek for å gjøre analyser:
[Turf](http://turfjs.org/)

## Bakgrunnskart

Bakgrunnskart definerer stilen på kartet, og kan enkelt byttes i koden i `public/js/index.js`.

```javascript

    var map = new mapboxgl.Map({
            container: 'map', // container id
            style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
            center: [10.74812, 59.92145], // starting position [lng, lat]
            zoom: 14 // starting zoom. Zoomlevel is from 0 -> 22, where 22 is zoomed in an 0 is zoomed out
      });

```
Mapbox har noen ferdige eksempler på bakgrunnskart dere kan bruke. Det eneste dere trenger å gjøre er å endre `style`.
De finner dere her: https://www.mapbox.com/api-documentation/#styles

