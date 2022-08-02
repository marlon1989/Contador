var currentNumberWrapper = document.getElementById("currentNumber");
var incrementNumber = document.getElementById("incrementNumber");
var decrementNumber = document.getElementById("decrementNumber");
var currentNumber = 0;
var redText;

incrementNumber.addEventListener('click', increment);
decrementNumber.addEventListener('click', decrement);

function increment() {
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;

    if(currentNumber >= 0) {
        colorText = document.getElementsByTagName('span')[0];
        colorText.style.color = 'black';
    }

    if(currentNumber >= 10) {
        
        incrementNumber.disabled = true;
    }
}

function decrement() {
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber;

    if(currentNumber < 0) {
        colorText = document.getElementsByTagName('span')[0];
        colorText.style.color = 'red';
    }

    if(currentNumber <= -10) {
        
        decrementNumber.disabled = true;
    }
}