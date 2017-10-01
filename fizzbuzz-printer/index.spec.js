'use strict';

const { expect } = require('chai');
const fizzBuzzPrinter = require('./');

describe('FizzBuzz Printer', function() {
  describe('when given a bad range (negative, or zero element)', function() {
    const zeroRange = { from: 5, to: 4 };
    it('returns empty list', function() {
      expect(fizzBuzzPrinter(zeroRange)).to.eql([]);
    });
  });

  describe('when given a one element range', function() {
    it('returns the one element and its printed counterpart', function() {
      const range = { from: 5, to: 5 };
      expect(fizzBuzzPrinter(range)).to.eql([
        { num: 5, toPrint: 'Buzz' }
      ]);
    });
  });

  describe('when given a multi-element range', function() {
    it('returns all numbers and printed versions in that order', function() {
      const range = { from: 5, to: 7 };
      expect(fizzBuzzPrinter(range)).to.eql([
        { num: 5, toPrint: 'Buzz' },
        { num: 6, toPrint: 'Fizz' },
        { num: 7, toPrint: '7' }
      ]);
    });
  });
});
