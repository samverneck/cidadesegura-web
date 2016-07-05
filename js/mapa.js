function initialize() {
  var mapProp = {
        center:new google.maps.LatLng(-20.311713,-40.3163567),
        zoom:16,
        
        mapTypeId:google.maps.MapTypeId.ROADMAP
      };
      var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

    }
    google.maps.event.addDomListener(window, 'load', initialize);


$(document).ready(function () {
    initialize();
});

