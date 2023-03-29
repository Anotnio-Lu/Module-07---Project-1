

const apiKey = 'AIzaSyDMbFtmBFYpWYu9J1beflx8ZP8DUm8PXn8';


navigator.geolocation.getCurrentPosition(position => {
  const { latitude, longitude } = position.coords;

  // Show a map centered at latitude / longitude.
  var currentLocation = { lat: latitude, lng: longitude };
//   var currentLocation = { lat: -33.868, lng: 151.209 };

  // The map, centered at Uluru
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: currentLocation,
  });

  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Current Location</h1>' +
    "</div>"
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "the stop",
  });
  const marker = new google.maps.Marker({
    position: currentLocation,
    map: map,
    title: "Your location",
    label: "A",
    animation: google.maps.Animation.DROP,
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });


  var distanceRadius = {
    small: {
      center: currentLocation,
      radius: 5000,
      color: "#2a9d8f",
    },
    large: {
      center: currentLocation,
      radius: 10000,
      color: "#f4a261",
    },
  
  }

  for (var size in distanceRadius) {
    var Circle = new google.maps.Circle({
        strokeColor: distanceRadius[size].color,
        strokeOpacity: 1,
        strokeWeight: 2,
        fillColor: distanceRadius[size].color,
        fillOpacity: 0.20,
        map,
        center: distanceRadius[size].center,
        radius: distanceRadius[size].radius,
      });
  }

  const service = new google.maps.places.PlacesService(map);
  service.textSearch({ 
    query: 'car_repair', 
    location: map.getCenter(), 
    radius: 500 
  },
    (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
          var place = results[i];

          const contentString =
            '<div id="content">' +
            '<div id="siteNotice">' +
            "</div>" +
            '<h1 id="firstHeading" class="firstHeading">'+ place.name + '</h1>' +
            '<div id="bodyContent">' +
            '<p><b>Name: </b> ' + place.name +
            '<br><b>Address: </b> ' + place.formatted_address +
            '<br><b>Number: </b> ' + place.formatted_phone_number +
            '<br><b>Rating: </b> ' + place.rating +
            '</p>' +
            "</div>" +
            "</div>";
          const infowindow = new google.maps.InfoWindow({
            content: contentString,
            ariaLabel: "the stop",
          });
          const marker = new google.maps.Marker({
            position: place.geometry.location,
            map: map,
            title: place.name,
            label: i.toString(),
            animation: google.maps.Animation.DROP,
          });

          marker.addListener("click", () => {
            infowindow.open({
              anchor: marker,
              map,
            });
          });

        }
      }
    }
  );
  
});

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.031 };

    // The map, centered at Uluru
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
}

window.initMap = initMap;

const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initMap`;
document.head.appendChild(script);