'use strict';

const fizzBuzz = require('../fizzbuzz');

module.exports = function fizzBuzzPrinter(range) {
  if (range.from > range.to) return [];
  return Array.from(createRange(range.from, range.to)).map(x => ({ num: x, toPrint: fizzBuzz(x) }));
};

function* createRange(from, to) {
  let i = from;
  while (i <= to) {
    yield i;
    i++;
  }
}
