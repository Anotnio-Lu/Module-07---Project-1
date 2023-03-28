
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

