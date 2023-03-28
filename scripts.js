/* 
var btnSearchVin = document.getElementById("search-btn");
var btnClearSearch = document.getElementById("clear-search-btn");
var entryForm = document.getElementById("vin-form");
var inputVin = document.getElementById("vin-input");
var historyRecord = 0;
var getCarDetails = function(event){
    event.preventDefault();
    var carVin = inputVin.value.trim();
    var length = carVin.length;
   if (length === 17){
    historyRecord = historyRecord+1;
    localStorage.setItem("VinList", JSON.stringify(carVin).toLowerCase());
var historyArray = {
        carVin: carVin,
        historyRecord: historyRecord
        };
var newA = JSON.stringify(historyArray);
console.log(newA);
       }
    };
function clearSearch(){
            inputVin.value = " ";
            console.log(inputVin);
};
entryForm.addEventListener("submit", getCarDetails);
btnSearchVin.addEventListener("click", getCarDetails);
btnClearSearch.addEventListener("click",clearSearch);



// Initialize an empty array to hold the vehicle data
let vehicleData = [];

// Function to handle the VIN search
function searchVIN(vin) {
  // Perform the VIN lookup and retrieve the vehicle data
  // For the sake of this example, let's assume the lookup function is named 'lookupVehicleData'
  let data = lookupVehicleData(vin);

  // Extract the make, model, and year from the data object
  let make = data.make;
  let model = data.model;
  let year = data.year;

  // Create an object to hold the vehicle data
  let vehicle = {
    vin: vin,
    make: make,
    model: model,
    year: year
  };

  // Add the vehicle object to the vehicleData array
  vehicleData.push(vehicle);

  // Return the vehicle data to the caller
  return vehicle;
}

// Example usage:
let vin = "12345678901234567";
let result = searchVIN(vin);
console.log(result); // Outputs: { vin: '12345678901234567', make: 'Toyota', model:


////////////////
*/


console.log("testing")

// Get DOM elements
const vinInput = document.getElementById('vin-input');
const searchBtn = document.getElementById('search-btn');
const clearSearchBtn = document.getElementById('clear-search-btn');
const clearHistoryBtn = document.getElementById('clear-history');
const historyList = document.querySelector('.list-group');

// Listen for search button click
searchBtn.addEventListener('click', (event) => {
    event.preventDefault();

    // Get VIN input value
    const vin = vinInput.value.trim();

    // Perform search and get car information
    // ...

    // Store VIN and car information in local storage
    localStorage.setItem(vin, JSON.stringify({ make: '...', model: '...', year: '...' }));

    // Display search and car history
    displayHistory();
});

// Listen for clear search button click
clearSearchBtn.addEventListener('click', (event) => {
    event.preventDefault();

    // Clear VIN input value
    vinInput.value = '';
});

// Listen for clear history button click
clearHistoryBtn.addEventListener('click', (event) => {
    event.preventDefault();

    // Clear all local storage items
    localStorage.clear();

    // Clear history list
    historyList.innerHTML = '';
});

// Display search and car history
function displayHistory() {
    // Clear history list
    historyList.innerHTML = '';

    // Loop through local storage items and display history
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        // Display VIN and car information in table row
        const carInfo = JSON.parse(localStorage.getItem(key));
        const tableRow = document.createElement('tr');
        tableRow.innerHTML = `
            <td>${key}</td>
            <td>${carInfo.make}</td>
            <td>${carInfo.model}</td>
            <td>${carInfo.year}</td>
        `;
        historyList.appendChild(tableRow);
    }
}

// Display initial search and car history
displayHistory();





