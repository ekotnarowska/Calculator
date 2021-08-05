/**
 * @jest-environment jsdom
 */
// const  Calculator = require( '../www/js/calculator');
// const calculator = require('../www/js/main')

// test('On button click the number is', () => {
//     // given

//     document.body.innerHTML =
//     '<div class="display__input">0</div>' +
//     '<div class="calculator__keys">' +
//     '  <button class="key operator plus">+</button>' +
//     '</div>';

//     // when
//     document.querySelector('.plus').click();

//     // then
//     expect(document.querySelector('display__input').innerText).toEqual('+');
// });

//  describe('Test number input', () => {
//   let myCalculator;

//   beforeEach(function() {
//     let resultDisplay = document.createElement("div");
//     let inputDisplay = document.createElement("div");
//     myCalculator = new Calculator(resultDisplay, inputDisplay)
//   })

//   test("should update the display value with the number", function() {
//     myCalculator.insertNumber('5')
//     myCalculator.updateDisplay()
//     expect(myCalculator.inputDisplay.textContent).toEqual('5');
//   })
// })
