var patientData = require('./mock/patient');
var restify = require('restify');

var app = restify.createServer();

app.use(restify.acceptParser(app.acceptable));
app.use(restify.queryParser());
app.use(restify.bodyParser());

var global = {
  diary: patientData.diaryToday
};

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.header('Access-Control-Allow-Credentials', true);

  // intercept OPTIONS method
  if ('OPTIONS' === req.method) {
    res.status(200).end();
  } else {
    next();
  }
});

app.use(function (req, res, next) {
  console.log(req.url);
  setTimeout(function () {next();},0);
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

  res.send(200, {});
});

app.listen(process.env.PORT || 8080);

