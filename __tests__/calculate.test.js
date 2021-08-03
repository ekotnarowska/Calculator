/**
 * @jest-environment jsdom
 */

const { calculate } = require('.././www/js/main');

test('adds 1 + 2 to equal 3', () => {
  const previousItem = 1;
  const currentItem = 2;
  const operator = '+';
    expect(calculate(previousItem, operator, currentItem)).toBe(3);
  });

  // test('subtracts 5-3 to equal 2', () => {
  //   const previousItem = 5;
  //   const currentItem = 3;
  //     expect(calculate(previousItem - currentItem)).toBe(2);
  //   });