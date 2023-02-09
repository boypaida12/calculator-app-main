let display = document.getElementById('display');
let keypad = Array.from(document.getElementsByClassName('keypad'));

let currentExpression = "";

let delBtn = document.querySelector('.delete');
delBtn.addEventListener('click', function() {
    currentExpression = currentExpression.toString();
    currentExpression = currentExpression.substring(0, currentExpression.length - 1);
    display.innerHTML = currentExpression;
});


let resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', function() {
    display.innerHTML = '';
});


keypad.forEach(function (key) {
  key.addEventListener('click', function () {
    if (key.textContent === "=") {
      try {
        currentExpression = eval(currentExpression);
        display.innerHTML = "<h1>" + currentExpression + "</h1>";
      } catch (error) {
        display.innerHTML = "<h1>Error</h1>";
      }
    } else if (key.textContent === "RESET") {
      currentExpression = "";
      display.innerHTML = "<h1></h1>";
    } else if (key.textContent === "DEL") {
      currentExpression = currentExpression.substring(0, currentExpression.length - 1);
      display.innerHTML = "<h1>" + currentExpression + "</h1>";
    } else if (key.textContent === "x") {
        currentExpression += "*";
        display.innerHTML = "<h1>" + currentExpression + "</h1>";
    } else {
      currentExpression += key.textContent;
      display.innerHTML = "<h1>" + currentExpression + "</h1>";
    }
  });
});
