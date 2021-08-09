/**
 * @jest-environment jsdom
 */


const  Calculator = require( '../www/js/calculator');

describe('Test buttons', () => {

  test('after click the button with a number 1, input display number 1', () => {
      // given
      document.body.innerHTML =
      '<div class="calculator__display">' +
      '<div class="display__result"></div>' +
      '<div class="display__input"></div>' +
      '</div>' +
      '<div class="calculator__keys">' +
      '<button class="key number"></button>' +
      '</div>';
  
      let inputDisplay = document.querySelector('.display__input');
      let resultDisplay = document.querySelector('.display__result');
      let numberKey = document.querySelector('.number');
      
      let myCalculator = new Calculator(inputDisplay, resultDisplay)

      myCalculator.inputDisplay.innerText = '';
      myCalculator.resultDisplay.innerText = '';
      numberKey.innerText = '1'
    
      numberKey.addEventListener('click', () => {
        myCalculator.insertNumber(numberKey.innerText);
        myCalculator.updateDisplay();
    })
  
      // when
      numberKey.click();
 
      // then
      expect(document.querySelector('.display__input').innerText).toEqual('1');
      expect(document.querySelector('.display__result').innerText).toEqual('');
  });

  test('after click twice the button with a number 9, input display number 99', () => {
    // given
    document.body.innerHTML =
    '<div class="calculator__display">' +
    '<div class="display__result"></div>' +
    '<div class="display__input"></div>' +
    '</div>' +
    '<div class="calculator__keys">' +
    '<button class="key number"></button>' +
    '</div>';

    let inputDisplay = document.querySelector('.display__input');
    let resultDisplay = document.querySelector('.display__result');
    let numberKey = document.querySelector('.number');
    
    let myCalculator = new Calculator(inputDisplay, resultDisplay)

    myCalculator.inputDisplay.innerText = '';
    myCalculator.resultDisplay.innerText = '';
    numberKey.innerText = '9'
  
    numberKey.addEventListener('click', () => {
      myCalculator.insertNumber(numberKey.innerText);
      myCalculator.updateDisplay();
  })

    // when
    numberKey.click();
    numberKey.click();

    // then
    expect(document.querySelector('.display__input').innerText).toEqual('99');
    expect(document.querySelector('.display__result').innerText).toEqual('');
  });

  test('after click the button with a number 9, and then with a number 2 input display number 92', () => {
    // given
    document.body.innerHTML =
    '<div class="calculator__display">' +
    '<div class="display__result"></div>' +
    '<div class="display__input"></div>' +
    '</div>' +
    '<div class="calculator__keys">' +
    '<button class="key number"></button>' +
    '</div>';

    let inputDisplay = document.querySelector('.display__input');
    let resultDisplay = document.querySelector('.display__result');
    let numberKey = document.querySelector('.number');
    
    let myCalculator = new Calculator(inputDisplay, resultDisplay)

    myCalculator.inputDisplay.innerText = '';
    myCalculator.resultDisplay.innerText = '';
    numberKey.innerText = '9'
  
    numberKey.addEventListener('click', () => {
      myCalculator.insertNumber(numberKey.innerText);
      myCalculator.updateDisplay();
  })

    // when
    numberKey.click();
    numberKey.innerText = '2'
    numberKey.click();

    // then
    expect(document.querySelector('.display__input').innerText).toEqual('92');
    expect(document.querySelector('.display__result').innerText).toEqual('');
  });
});
