export function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log('TCL: getLocation -> position', position);
    });
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
}
