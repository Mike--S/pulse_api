var patientData = require('./mock/patient');
var restify = require('restify');
var _ = require('lodash');

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

app.post('/api/control', function(req, res) {
  var controlBlock = _.filter(global.diary.controlBlocks, function (controlBlock) {
    return controlBlock.id === req.body.controlBlockId;
  });
  
  _.forEach(controlBlock[0].parameters, function (param) {
    _.forEach(param.time, function (timeParam) {
      _.forEach(req.body.timeParams, function (postTimeParam) {
        if (postTimeParam.value !== '' && postTimeParam.id === timeParam.id) {
          timeParam.value = postTimeParam.value;
        }
      })
    });
  });

  res.send(200, {});
});

app.post('/api/health', function(req, res) {
  global.diary.healthBlock.text = req.body.text;
  res.send(200, {});
});

app.listen(process.env.PORT || 8080);

