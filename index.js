
const Display = document.getElementById("Display");

function appendToDisplay(input){
    Display.value += input;
}


function clearDisplay(){
    Display.value = "";
}

function calculate(){
    Display.value = eval(Display.value);
    
}