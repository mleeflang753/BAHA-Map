mapboxgl.accessToken = 'pk.eyJ1IjoibWxlZWZsYW5nIiwiYSI6ImNtaDljNGFhcDBvcXYybW9vbnFqYTFxYnYifQ.8jpQkaTF_OFLwEdxvuObmw';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/mleeflang/cmh9czjtb00pz01r5h9x4f31s', //Your Style URL goes here
  center: [-122.259361, 37.875334], // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 14 // starting zoom
});

map.on('load', function () {
  map.addSource('points-data', {
    type: 'geojson',
    data: 'https://raw.githubusercontent.com/mleeflang753/BAHA-Map/refs/heads/main/183data.geojson'
  });

  map.addLayer({
    id: 'points-layer',
    type: 'circle',
    source: 'points-data',
    paint: {
      'circle-color': '#4264FB',
      'circle-radius': 8,
      'circle-stroke-width': 3,
      'circle-stroke-color': '#000000'
    }
  });

  map.on('click', 'points-layer', (e) => {

    const coordinates = e.features[0].geometry.coordinates.slice();
    const properties = e.features[0].properties;

    const popupContent = `
          <div>
              <h3>${properties.Landmark}</h3>
              <p><strong>Address:</strong> ${properties.Address}</p>
              <p><strong>Architect & Date:</strong> ${properties.Architect_Date}</p>
              <p><strong>Designated:</strong> ${properties.Designated}</p>
              ${properties.Link ? `<p><a href="${properties.Link}" target="_blank">More Information</a></p>` : ''}
              ${properties.Notes ? `<p><strong>Notes:</strong> ${properties.Notes}</p>` : ''}
          </div>
`;

    new mapboxgl.Popup()
      .setLngLat(coordinates)
      .setHTML(popupContent)
      .addTo(map);
  });
  // Change cursor to pointer when hovering over points
  map.on('mouseenter', 'points-layer', () => {
    map.getCanvas().style.cursor = 'pointer';
  });

  // Change cursor back when leaving points
  map.on('mouseleave', 'points-layer', () => {
    map.getCanvas().style.cursor = '';
  });
});
