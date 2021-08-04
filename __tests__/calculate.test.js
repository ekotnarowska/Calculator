/**
 * @jest-environment jsdom
 */

const calculate = require('.././www/js/calculate');

describe('calculate', () => {

  test('adds 2 + 3 to equal 5', () => {
    const previousItem = 2;
    const currentItem = 3;
    const operator = '+';
    expect(calculate(previousItem, currentItem, operator)).toBe(5)
    });

  test('subtracts 5-3 to equal 2', () => {
    const previousItem = 5;
    const currentItem = 3;
    const operator = '-';
    expect(calculate(previousItem, currentItem, operator)).toBe(2);
    });

    test('mulitplies 3 * -5 to equal -15', () => {
      const previousItem = 3;
      const currentItem = -5;
      const operator = 'x';
      expect(calculate(previousItem, currentItem, operator)).toBe(-15);
    });

    test('divides 12 by 4 to equal 3', () => {
      const previousItem = 12;
      const currentItem = 4;
      const operator = '÷';
      expect(calculate(previousItem, currentItem, operator)).toBe(3);
      });
    
});