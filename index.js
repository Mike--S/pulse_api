var patientData = require('./mock/patient');

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
  console.log(req.originalUrl);
  setTimeout(function () {next();},500);
});

app.get('/api/login', function (req, res) {
  var result = {
    fio: patientData.fio,
    doctors: patientData.patientDoctors,
    devices: patientData.devices
  };

  res.send(result);
});

app.get('/api/diary', function(req, res) {
  var result = {
    diary: patientData.diaryToday
  };

  res.send(result);
});

app.listen(process.env.PORT || 8080);

