
var btnClearSearch = document.getElementById("clear-search-btn");
var inputVin = document.getElementById("vin-input");
var inputContainer = $('#vin-form')

var list = []
var validVin = true

inputContainer.on('click', '#search-btn', function(event){

    list = []
    let storedInfo = JSON.parse(localStorage.getItem("VinList"));

    if(storedInfo !== null){
        list = storedInfo
    } 

    var sc = '!#"$%&]()*+,-./:;<=>?@[^_`{|}~\\'
    let scArray = sc.split('');
    for(var i = 0; i < scArray.length; i++){
        if(inputVin.value.includes(scArray[i])){
            validVin = false
        }
    }

    var upperCaseVin = upperCaseLetters(inputVin.value)

    if(validVin == true && upperCaseVin.length == 17){
        for(var i = 0; i < list.length; i++){
            if (upperCaseVin == list[i]){
                list.splice(i, 1);
              }
        }
        list.push(upperCaseVin);
        localStorage.setItem("VinList", JSON.stringify(list));
        $(".invalid-message").text("")
        print(upperCaseVin)

        populateList()
    } else{
        $(".invalid-message").text("INVALID INPUT")
        validVin = true
    } 
})

inputContainer.on('click', '#clear-search-btn', function(event){
    $('#vin-input').val('');
})

function upperCaseLetters(input){
    var inputArray = input.split('');

    for(var i = 0; i < inputArray.length; i++){
        var upper = inputArray[i].toUpperCase()
        inputArray.splice(i, 1, upper)
    }

    return inputArray.join("")
}

var listContainer = $('.list-group')
var formContainer = $('.form')
var vinHistory = $('.list-group')
var yearDisplay = $('.year')
var modelDisplay = $('.model')
var makeDisplay = $('.make')

yearDisplay.text("")
modelDisplay.text("")
makeDisplay.text("")

//grab information from localstorage
let infromation = JSON.parse(localStorage.getItem("VinList"));

if(infromation !== null){
    list = infromation
} 

//extract informaiton from the lastest input
var lastinput = list.length
var vinNumber = list[lastinput-1]

function populateList() {
    $('.list-group').children('li').remove()

    $.each( list, function( i, value ){
        var Anchor = $('<li>');
        Anchor.addClass("history")
        Anchor.css('cursor', 'pointer')
        Anchor.text(value)
        
        vinHistory.append(Anchor);
    })
}

// copy paste snippet from rapidAPI
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9a598bf9b8msh2cbffe6ff55df67p1a0c32jsn9ad7b4fd3064',
		'X-RapidAPI-Host': 'vindecoder.p.rapidapi.com'
	}
};

// replace vin information with information extracted from localStorage
function print(vin){

    fetch('https://vindecoder.p.rapidapi.com/decode_vin?vin='+ vin, options)
        .then(response => response.json())
        .then(response => {
          if(response.success == false){
            $( ".vin" ).text( vin ).prepend("VIN number: ")
            $( ".model" ).text( "The VIN number you entered is invalid" )
          } else{
            $( ".vin" ).text( vin ).prepend("VIN number: ")
            $( ".model" ).text( response.specification.model ).prepend("Model: ")
            $( ".make" ).text( response.specification.make ).prepend("Make: ")
            $( ".year" ).text( response.specification.year ).prepend("Year: ")
          }

        })
        .catch(err => console.error(err));
}

formContainer.on('click', '#clear-history', function(event){
    
    localStorage.removeItem('VinList')
    var item = $(event.target).parent().children('div').children('ul').children('li').remove()

})

listContainer.on('click', '.history', function(event){
    
    var item = $(event.target)[0].textContent
    print(item)
})

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
    query: 'bicycle_store', 
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

print(vinNumber)
populateList()

