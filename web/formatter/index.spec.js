'use strict';

const { expect } = require('chai');
const format = require('./');

describe('Web Formatter', function() {

  it('formats one line with number and printed version', function() {
    expect(format([{ num: 2, toPrint: 'toPrint' }])).to.eql('2 - toPrint');
  });

  it('separates lines with newline character', function() {
    expect(format([
      { num: 2, toPrint: 'toPrint' },
      { num: 3, toPrint: 'toPrint 3' }
    ])).to.eql('2 - toPrint\n3 - toPrint 3');
  });

});
