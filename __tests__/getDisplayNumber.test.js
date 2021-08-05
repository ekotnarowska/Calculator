/**
 * @jest-environment jsdom
 */

const getDisplayNumber = require('../www/js/test/getDisplayNumber');

describe('getDisplayNumber', () => {

    test('it creates a string from float number', () => {
       const number = 33.55;
       expect(getDisplayNumber(33.55)).toEqual('33.55');
    });

    test('it creates a string from integer', () => {
        const number = 33;
        expect(getDisplayNumber(33)).toEqual('33');
     });
 });