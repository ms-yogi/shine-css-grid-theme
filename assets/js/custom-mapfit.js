 // add api key
 mapfit.apikey = "591dccc4e499ca0001a4c6a410a76c6008914659ad32a7c5b186af43";

 // draw map
 let map = mapfit.MapView('mapfit', { theme: 'day' });

 //set zoom
 map.setZoom(12);

 // set map center with coordinate
 map.setCenter([18.52, 73.85]);

 //set map center with layer
 map.setCenterWithLayer(myPolygon, 0, 0);

 // create marker
 myMarker = mapfit.Marker();

 // geocode marker address
 myMarker.address = "[18.52, 73.85]";

 // set center using marker position
 map.addMarker(myMarker).then(function () {
     map.setCenter(myMarker.getPosition());
 });