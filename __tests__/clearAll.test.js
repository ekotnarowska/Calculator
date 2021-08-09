const  Calculator = require( '../www/js/calculator');

describe('Test buttons', () => {

test('after click the button "AC" clears display and all stored values', () => {
    // given

    document.body.innerHTML =
    '<div class="calculator__display">' +
    '<div class="display__result"></div>' +
    '<div class="display__input"></div>' +
    '</div>' +
    '<div class="calculator__keys">' +
    '  <button class="key clear">AC</button>' +
    '</div>';
   
    let inputDisplay = document.querySelector('.display__input');
    let resultDisplay = document.querySelector('.display__result');


    let myCalculator = new Calculator(inputDisplay, resultDisplay)

    myCalculator.inputDisplay.innerText = '8';
    myCalculator.resultDisplay.innerText = '16';

    //when
    myCalculator.clearAll()
    myCalculator.updateDisplay()
    
    // then
    expect(myCalculator.inputDisplay.innerText).toEqual('0');
    expect(myCalculator.resultDisplay.innerText).toEqual('');
});
});