'use strict';

const express = require('express');
const app = express();

const fizzBuzzPrinter = require('../../fizzbuzz-printer');
const format = require('../formatter');

app.get('/api/list', function(req, res) {
  const range = { from: parseInt(req.query.from), to: parseInt(req.query.to) };
  const body = format(fizzBuzzPrinter(range));
  res.header('Content-Type', 'text/plain');
  res.end(body);
});

module.exports = app;
