var Map = function(latLng, zm) {
  this.googleMap = new google.maps.Map(document.getElementById('map'), {
    center: latLng,
    zoom: zm
  }),
  this.addMarker = function(latLng, title) {
    var marker = new google.maps.Marker({
      position: latLng,
      map: this.googleMap,
      title: title
    });
    return marker;
  }
}