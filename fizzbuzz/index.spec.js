'use strict';

const { expect } = require('chai');
const fizzBuzz = require('./');

describe('FizzBuzz core', function() {
  describe('when the given number is not divisible by 3 or 5', function() {
    it('gives back the original number', function() {
      expect(fizzBuzz(1)).to.eql('1');
      expect(fizzBuzz(2)).to.eql('2');
    });
  });

  describe('when the given number is divisble by 3', function() {
    it('returns Fizz', function() {
      expect(fizzBuzz(3)).to.eql('Fizz');
      expect(fizzBuzz(6)).to.eql('Fizz');
    });
  });

  describe('when the given number is divisible by 5', function() {
    it('returns Buzz', function() {
      expect(fizzBuzz(5)).to.eql('Buzz');
      expect(fizzBuzz(10)).to.eql('Buzz');
    });
  });

  describe('when the given number is divisible by 3 and 5', function() {
    it('returns FizzBuzz', function() {
      expect(fizzBuzz(15)).to.eql('FizzBuzz');
      expect(fizzBuzz(30)).to.eql('FizzBuzz');
    });
  });
});
