
const Calculator = require("./calculator");

const numberKeys = document.querySelectorAll('.number');
const operatorKeys = document.querySelectorAll('.operator');
const equalsKey = document.querySelector('.equals');
const backspaceKey = document.querySelector('.backspace');
const clearKey = document.querySelector('.clear');
const resultDisplay = document.querySelector('.display__result');
const inputDisplay = document.querySelector('.display__input');
const negation = document.querySelector('.negation');

const calculator = new Calculator(inputDisplay, resultDisplay)

numberKeys.forEach(key => {
    key.addEventListener('click', () => {
        calculator.insertNumber(key.innerText);
        calculator.updateDisplay();
    })
})

operatorKeys.forEach(key => {
    key.addEventListener('click', () => {
        calculator.chooseOperation(key.innerHTML);
        calculator.updateDisplay();
    })
})

equalsKey.addEventListener('click', key => {
    calculator.calculate();
    calculator.updateDisplay();
})

clearKey.addEventListener('click', key => {
    calculator.clearAll();
    calculator.updateDisplay();
})

backspaceKey.addEventListener('click', key => {
    calculator.deleteLastItem();
    calculator.updateDisplay();
})

negation.addEventListener('click', key => {
    calculator.changeSign()
    calculator.updateDisplay()
})

module.exports = calculator;
