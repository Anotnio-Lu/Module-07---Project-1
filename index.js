
var btnSearchVin = document.getElementById("search-btn");
var btnClearSearch = document.getElementById("clear-search-btn");
var entryForm = document.getElementById("vin-form");
var inputVin = document.getElementById("vin-input");
var form = $('#vin-form')
var input = $('#vin-input')

var list = []
var validVin = true

form.on('click', '#search-btn', function(event){

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
        console.log(list)
        list.push(upperCaseVin);
        localStorage.setItem("VinList", JSON.stringify(list));
        $(".invalid-message").text("")
        window.location.href = "landingpage.html";
    } else{
        $(".invalid-message").text("INVALID INPUT")
        validVin = true
    } 
})


form.on('click', '#clear-search-btn', function(event){
    input.val('');
})

function upperCaseLetters(input){
    var inputArray = input.split('');
    for(var i = 0; i < inputArray.length; i++){
        var upper = inputArray[i].toUpperCase()
        inputArray.splice(i, 1, upper)
    }
    return inputArray.join("")
}