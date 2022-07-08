function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in", lat, lon);
}
function onGeoError() {
  alert("Are you in the space? I can't find you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
