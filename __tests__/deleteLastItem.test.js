/**
 * @jest-environment jsdom
 */

const deleteLastItem = require('../www/js/test/deleteLastItem');
 
describe('deleteLastItem', () => {

    test('it deletes the last input sign', () => {
       const input = 357;
       expect(deleteLastItem(input)).toEqual('35');
    });

    test('it changes to 0 if there is no input sign left', () => {
        const input = '';
        expect(deleteLastItem(input)).toEqual('0');
     });
 });