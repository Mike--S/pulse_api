var patientData = require('./mock/patient');
var bodyParser = require('body-parser');
const express = require('express');
const app = express();

var global = {
  diary: patientData.diaryToday
};

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Cache-Control');

  // intercept OPTIONS method
  if ('OPTIONS' === req.method) {
    res.status(200).end();
  } else {
    next();
  }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
  var result = global.diary;

  res.send(result);
});

app.post('/api/diary', function(req, res) {

  res.send({});
});

app.listen(process.env.PORT || 8080);

