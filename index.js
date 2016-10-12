var patientData = require('./mock/user');
var utils = require('./utils');
var restify = require('restify');
var _ = require('lodash');

var app = restify.createServer();

app.use(restify.acceptParser(app.acceptable));
app.use(restify.queryParser());
app.use(restify.bodyParser());

var global = {
  diary: patientData.diaryToday,
  diaryEmpty: patientData.diaryEmpty
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

app.post('/api/login', function (req, res) {
  var result;

  if (req.body.login === 'doctor') {
    result = {
      type: 'doctor',
      fio: patientData.doctorsFio,
      patients: patientData.doctorsPatient
    }
  }
  else {
    result = {
      type: 'patient',
      fio: patientData.fio,
      doctors: patientData.patientDoctors,
      devices: patientData.devices
    };
  }

  res.send(result);
});

app.get('/api/userData', function (req, res) {
  var result;
  if (!req.params.name) {
    result = {};
  }
  else if (req.params.name === 'doctor') {
    result = {
      type: 'doctor',
      fio: patientData.doctorsFio,
      patients: patientData.doctorsPatient
    }
  }
  else {
    result = {
      type: 'patient',
      fio: patientData.fio,
      doctors: patientData.patientDoctors,
      devices: patientData.devices
    };
  }

  res.send(!_.isEmpty(result) ? result: 404);
});

app.get('/api/diary', function(req, res) {
  if (!_.isEmpty(req.params) && req.params.userId) {
    
  }
  if( _.isEmpty(req.params) || ( req.params.date && utils.compareDates(new Date(req.params.date), new Date()) ) ) {
    res.send(global.diary);
  }
  else if (req.params.date && utils.compareDates(new Date(req.params.date), new Date(), 1)) {
    var temp = _.cloneDeep(global.diary);
    _.forEach(temp.controlBlocks, function (block) {
      block.disabled = true;
    });
    temp.healthBlock.disabled = true;
    temp.selfControlBlock.disabled = true;
    res.send(temp);
  }
  else {
    res.send(global.diaryEmpty);
  }
});

app.get('/api/parameters', function(req, res) {
  res.send(200, patientData.params);
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

app.post('/api/selfControl', function(req, res) {
  _.forEach(global.diary.selfControlBlock.parameters, function (param) {
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

