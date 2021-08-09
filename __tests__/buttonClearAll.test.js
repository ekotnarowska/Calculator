/**
 * @jest-environment jsdom
 */

const  Calculator = require( '../www/js/calculator');

describe('Test buttons', () => {

  test('after click the button "AC" clears display and all stored values', () => {
      // given
  
      document.body.innerHTML =
      '<div class="calculator__display">' +
      '<div class="display__result">22</div>' +
      '<div class="display__input">11</div>' +
      '</div>' +
      '<div class="calculator__keys">' +
      '  <button class="key clear">AC</button>' +
      '</div>';
  
      let inputDisplay = document.querySelector('.display__input');
      let resultDisplay = document.querySelector('.display__result');
      let clearKey = document.querySelector('.clear');
 

      let myCalculator = new Calculator(inputDisplay, resultDisplay)

      myCalculator.inputDisplay.innerText = '11';
      myCalculator.resultDisplay.innerText = '22';
    
      clearKey.addEventListener('click', () => {
        myCalculator.clearAll();
        myCalculator.updateDisplay();
    })

      // when
      clearKey.click();
 
      // then
    
      expect(document.querySelector('.display__input').innerText).toEqual('0');
      expect(document.querySelector('.display__result').innerText).toEqual('');
  });
  });


