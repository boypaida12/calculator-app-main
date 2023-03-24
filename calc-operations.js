let display = document.getElementById('display');
let reset = document.getElementById('resetBtn');
let del = document.getElementById('del');
let equal = document.getElementById('equal');
let add = document.getElementById('add');
let subtract = document.getElementById('minus');
let divide = document.getElementById('divide');
let multiply = document.getElementById('multiply');
let button = document.querySelectorAll('.buttons');
let isReset = true;
let operand1 = null;
let operand2 = null;
let operator = null;
let result = null;
 
//looping through each button and displaying on screen
button.forEach(function(buttons){
    buttons.addEventListener('click', function(e){
        let buttonValue = e.target.innerHTML;
        if(isReset) {
            display.innerHTML = "";
            isReset = false;
        }
        if(display.innerHTML === "0") {
            display.innerHTML = "";
        }
        if(buttonValue === "." && display.innerHTML.includes(".")){
            return // do nothing if there is already a decimal point
        }
        display.innerHTML += buttonValue
    })
})

function animateDisplay() {
    display.classList.add("blink");
    display.addEventListener("animationend", function() {
        display.classList.remove("blink");
    }, {once: true}); // remove the listener after the first animation ends
}

//reset button function
reset.addEventListener('click', function(){
    operand1 = null;
    operand2 = null;
    operator = null;
    result = 0; // set result to 0 instead of null
    isReset = true;
    animateDisplay();
    display.innerHTML = "0";
})

//delete button function
del.addEventListener('click', function(){
  let displayValue = display.innerHTML;
  if(displayValue !== ""){
    let newValue = displayValue.slice(0, -1); // remove last character from displayValue
    display.innerHTML = newValue; // update display with new value
    if(newValue === ""){
      display.innerHTML = "0"; // reset display to 0 if newValue is empty string
      operand1 = null; // reset operand1
      result = 0; // reset result
    } else {
      operand1 = Number(newValue); // update operand1 with new display value
    }
  }
});

//add function
function addNum(a, b){
    return a + b;
}

add.addEventListener('click', function(){
    if(operand1 === null){
        operand1 = Number(display.innerHTML);
        operator = "+";
    } else {
        operand2 = Number(display.innerHTML);
        animateDisplay();
        operator = "+";
        operand2 = null; // reset operand2 for possible subsequent calculations
    }
    isReset = true;
})

//subtract function
function subtractNum(a, b){
    return a - b;
}

subtract.addEventListener('click', function(){
    if(operand1 === null){
        operand1 = Number(display.innerHTML);
        operator = "-";
    } else {
        operand2 = Number(display.innerHTML);
        animateDisplay();
        operator = "-";
        operand2 = null; // reset operand2 for possible subsequent calculations
    }
    isReset = true;
})

//multiply function
function multiplyNum(a, b){
    return a * b;
}

multiply.addEventListener('click', function(){
    if(operand1 === null){
        operand1 = Number(display.innerHTML);
        operator = "*";
    } else {
        operand2 = Number(display.innerHTML);
        animateDisplay();
        operator = "*";
        operand2 = null; // reset operand2 for possible subsequent calculations
    }
    isReset = true;
})

//divide function
function divideNum(a, b){
    return a / b;
}

divide.addEventListener('click', function(){
    if(operand1 === null){
        operand1 = Number(display.innerHTML);
        operator = "/";
    } else {
        operand2 = Number(display.innerHTML);
        animateDisplay();
        operator = "/";
        operand2 = null; // reset operand2 for possible subsequent calculations
    }
    isReset = true;
})

//equal button function
equal.addEventListener('click', function(e){
    operand2 = Number(display.innerHTML);
    let result = 0;
    if(operator === '+'){
        animateDisplay();
        result = addNum(operand1, operand2);
    }
    else if(operator === '-'){
        animateDisplay();
        result = subtractNum(operand1, operand2);
    }
    else if(operator === '*'){
        animateDisplay();
        result = multiplyNum(operand1, operand2);
    }
    else if(operator === '/'){
        animateDisplay();
        result = divideNum(operand1, operand2);
    }
    display.innerHTML = result;
    operand1 = result;
});





// del.addEventListener('click', function(){
//     let displayValue = display.innerHTML;
//     if(displayValue !== ""){
//         let newValue = displayValue.slice(0, -1);
//         display.innerHTML = newValue;
//         operand1 = Number(display.innerHTML); // update operand1 with the new display value
//     if(newValue === ""){
//         display.innerHTML = "0";
//         operand1 = null; // reset operand1 when the display is reset to "0"
//         result = 0; // reset result if displayValue is 0
//     }
// }
// })