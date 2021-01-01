var number = document.querySelector("#inp-no");
var button = document.querySelector("#convert");
var outputDiv = document.querySelector("#output");


function clickHandler(){
    var numb = number.value;
    outputDiv.innerText = numb*numb*numb;
}







button.addEventListener("click", clickHandler);