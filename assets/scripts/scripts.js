var btnSearchVin = document.getElementById("search-vin");
var btnClearSearch = document.getElementById("clear-search");
var entryForm = document.getElementById("entry_form");

var inputVin = document.getElementById("vin-input");
var searchOutput = document.getElementById("search-output");


var getCarDetails = function(event){
    event.preventDefault();
    var record = 0;

    for (var i=0; i < vinTyreArr.length; i++){
        var carVin = inputVin.value.trim();
        var recordVin = vinTyreArr[i].vin;

        
        if (carVin === recordVin){
            var tyreDetails = vinTyreArr[i].tyre_measure;
            record = 1;
            var h3Output = document.createElement('h3');
            h3Output.textContent = "Your tyre search fit : " + tyreDetails;
            searchOutput.appendChild(h3Output);
        }
    }
        noRecord(record);
        return
};

function noRecord(record){
        if (record === 0){
            var par = document.createElement('p');
            par.textContent = "Unfortunately, we were not able to find a tyre record for this VIN."
            searchOutput.appendChild(par);
        }
};

function clearSearch(){
            searchOutput.textContent = " "
};

entryForm.addEventListener("submit", getCarDetails);
btnSearchVin.addEventListener("click", getCarDetails);
btnClearSearch.addEventListener("click",clearSearch);
