mapboxgl.accessToken = 'pk.eyJ1IjoibWxlZWZsYW5nIiwiYSI6ImNtaDljNGFhcDBvcXYybW9vbnFqYTFxYnYifQ.8jpQkaTF_OFLwEdxvuObmw';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/mleeflang/cmh9czjtb00pz01r5h9x4f31s', //Your Style URL goes here
  center: [-122.27, 37.87], // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 7 // starting zoom
    });