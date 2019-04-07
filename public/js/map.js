var mymap = L.map('mapid').setView([66.19145, -23.14936429645161], 7);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1Ijoiam9uaGxvIiwiYSI6ImNqbjMxYWx1MjR6dXgza254NzNxNXBwOWIifQ.aecs3_g3hzzsPeQNztWjmg'
}).addTo(mymap);

a = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -23.248443603515625,
            66.15662490498724
          ],
          [
            -23.201751708984375,
            66.16938981887661
          ],
          [
            -23.22784423828125,
            66.35623774057984
          ],
          [
            -23.1591796875,
            66.44200878646379
          ],
          [
            -22.65380859375,
            66.5482634621744
          ],
          [
            -22.57415771484375,
            66.58867434491842
          ],
          [
            -22.6483154296875,
            66.59631225137328
          ],
          [
            -22.67303466796875,
            66.55263537734461
          ],
          [
            -23.18389892578125,
            66.44420418163054
          ],
          [
            -23.214111328125,
            66.34852596083981
          ],
          [
            -23.2415771484375,
            66.16717029620423
          ]
        ]
      }
    }
  ]
}

L.geoJson(a,{onEachFeature: function(feature, featureLayer) {
  featureLayer.bindPopup('Einar Halfdans');}
}).addTo(mymap);
