function myMap() {
  var uganda =
  {
    center: new google.maps.LatLng(1.3733,32.2903),
    zoom:5,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var kiribati =
  {
    center: new google.maps.LatLng(3.3704,168.7340),
    zoom:2,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var alps = {
    center: new google.maps.LatLng(46.8876,9.6570),
    zoom:7,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var bangladesh = {
    center: new google.maps.LatLng(24.264115, 90.264123),
    zoom:5,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var vietnam = {
    center: new google.maps.LatLng(14.419049, 107.631225),
    zoom:6,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map1 = new google.maps.Map(document.getElementById("googleMap1"),uganda);
  var map2 = new google.maps.Map(document.getElementById("googleMap2"),kiribati);
  var map3 = new google.maps.Map(document.getElementById("googleMap3"),alps);
  var map4 = new google.maps.Map(document.getElementById("googleMap4"),bangladesh);
  var map5 = new google.maps.Map(document.getElementById("googleMap5"),vietnam);
  var uganda_marker = new google.maps.Marker({position:uganda.center});
  uganda_marker.setMap(map1);
  var kiribati_marker = new google.maps.Marker({position:kiribati.center});
  kiribati_marker.setMap(map2);
  var alps_marker = new google.maps.Marker({position:alps.center});
  alps_marker.setMap(map3);
  var bangladesh_marker = new google.maps.Marker({position:bangladesh.center});
  bangladesh_marker.setMap(map4);
  var vietnam_marker = new google.maps.Marker({position:vietnam.center});
  vietnam_marker.setMap(map5);
}
