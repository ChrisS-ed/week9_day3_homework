var Map = function(latLng, zm) {
  this.googleMap = new google.maps.Map(document.getElementById('map'), {
    center: latLng,
    zoom: zm
  })
}