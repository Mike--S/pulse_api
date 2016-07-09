
var patientData = require('./mock/patient');

/* eslint no-console: 0 */
const path = require('path');
const express = require('express');

const app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');

  // intercept OPTIONS method
  if ('OPTIONS' === req.method) {
    res.status(200).end();
  } else {
    next();
  }
});

app.use(function (req, res, next) {
  setTimeout(function () {next();},1000);
});

app.get('/api/patient', function (req, res) {
  res.send(patientData.patientDoctors);
  console.log(patientData.patientDoctors);
  next();
});

app.get('*', function (req, res)  {
  console.log('df');
});

app.listen(8080);

