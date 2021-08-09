/**
 * @jest-environment jsdom
 */


 const  Calculator = require( '../www/js/calculator');
 
   test('after click the button with a number 9, then the button with "+", then the button with a number 1, and then button equals, performs an addition and display the result', () => {
     // given
     document.body.innerHTML =
     '<div class="calculator__display">' +
     '<div class="display__result"></div>' +
     '<div class="display__input"></div>' +
     '</div>' +
     '<div class="calculator__keys">' +
     '<button class="key number"></button>' +
     '<button class="key operator"></button>' +
     '<button class="key equals">=</button>' +
     '</div>';
 
     let inputDisplay = document.querySelector('.display__input');
     let resultDisplay = document.querySelector('.display__result');
     let numberKey = document.querySelector('.number');
     let operatorKey = document.querySelector('.operator');
     let equalsKey = document.querySelector('.equals');
     
     let myCalculator = new Calculator(inputDisplay, resultDisplay)
 
     myCalculator.inputDisplay.innerText = '';
     myCalculator.resultDisplay.innerText = '';
     numberKey.innerText = '9'
     operatorKey.innerText = '+'
     equalsKey.innerText = '='
   
     numberKey.addEventListener('click', () => {
       myCalculator.insertNumber(numberKey.innerText);
       myCalculator.updateDisplay();
   })

     operatorKey.addEventListener('click', () => {
       myCalculator.chooseOperation(operatorKey.innerText);
       myCalculator.updateDisplay();
    })

    equalsKey.addEventListener('click', () => {
        myCalculator.calculate();
        myCalculator.updateDisplay();
    })

     // when
     numberKey.click();
     operatorKey.click();
     numberKey.innerText = '1'
     numberKey.click();
     equalsKey.click()

     // then
     expect(document.querySelector('.display__input').innerText).toEqual('10');
     expect(document.querySelector('.display__result').innerText).toEqual('');
   });

 