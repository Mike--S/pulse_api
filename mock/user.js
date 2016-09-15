var today = new Date;
var patientDoctors = {
  therapist: [
    'Угрюмов Олег Петрович'
  ],
  consultants: [
    'Семенов Сергей Петрович',
    'Глазырин Алексей Иванович',
    'Иванов Иван Иванович',
    'Петров Петр Петрович',
    'Сидоров Сидор Сидорович'
  ]
};

var doctorsPatient = {
  selfPatients: [
    'Еремин Виталий Викторович',
    'Двинских Николай Петрович',
    'Синицын Олег Викторович',
    'Перевозчиков Сергей Петрович',
    'Глазырина Вера Петровна'
  ],
  request: [
    'Селина Ольга Петровна'
  ],
  onConsultation: [
    'Селина Ольга Петровна',
    'Федоринова Ирина Александровна'
  ]
};

var fio = 'Еремин Виталий Викторович';
var doctorsFio = 'Глазырин Алексей Иванович';

var devices = [
  {
    id: 1111,
    name: 'Тонометр'
  },
  {
    id: 2222,
    name: 'Глюкометр'
  },
  {
    id: 3333,
    name: 'Шагомер'
  }
];

var diaryToday = {
  healthBlock: {
    text: "Очень хорошее"
  },
  controlBlocks: [
    {
      id: 1, //id of user угрюмов олег петрович
      doctor: 'Угрюмов Олег Петрович',
      parameters: [
        {
          id: 'AT',
          title: 'Артериальное давление',
          hint: '000/00',
          type: 'text',
          time: [
            {
              id: 'AT_Morning',
              label: 'утро',
              value: '100/60'
            },
            {
              id: 'AT_Day',
              label: 'день',
              value: ''
            },
            {
              id: 'AT_Evening',
              label: 'вечер',
              value: ''
            },
            {
              id: 'AT_Night',
              label: 'ночь',
              value: ''
            }
          ]
        },
        {
          id: 'CHSS',
          title: 'ЧСС',
          hint: '00',
          type: 'text',
          time: [
            {
              id: 'CHSS_Morning',
              label: 'утро',
              value: '10'
            },
            {
              id: 'CHSS_Day',
              label: 'день',
              value: ''
            }
          ]
        },
        {
          id: 'BLOOD',
          title: 'Сахар крови',
          hint: '0.0',
          type: 'text',
          time: [
            {
              id: 'BLOOD_Morning',
              label: 'утро',
              value: '3.3'
            },
            {
              id: 'BLOOD_Day',
              label: 'день',
              value: ''
            },
            {
              id: 'BLOOD_Evening',
              label: 'вечер',
              value: ''
            },
          ]
        }
      ]
    },
    {
      id: 2,
      doctor: 'Иванов Иван Иванович',
      parameters: [
        {
          id: 'TEMPERATURE',
          title: 'Температура',
          hint: '00.0',
          type: 'text',
          time: [
            {
              id: 'TEMPERATURE_MORNING',
              label: 'утро',
              value: ''
            },
            {
              id: 'TEMPERATURE_EVENING',
              label: 'вечер',
              value: ''
            }
          ]
        },
        {
          id: 'MOOD',
          title: 'Настроение',
          hint: '',
          type: 'range',
          time: [
            {
              id: 'MOOD_MORNING',
              label: 'утро',
              value: 0
            },
            {
              id: 'MOOD_EVENING',
              label: 'вечер',
              value: 6
            }
          ]
        },
        {
          id: 'BOLZAGRUDINOI',
          title: 'Боль за грудиной',
          type: 'boolean',
          time: [
            {
              id: 'BOLZAGRUDINOI_MORNING',
              label: 'утро',
              value: false
            },
            {
              id: 'BOLZAGRUDINOI_DAY',
              label: 'день',
              value: false
            },
            {
              id: 'BOLZAGRUDINOI_2200',
              label: '22:00',
              value: false
            }
          ]
        }
      ]
    }
  ],
  recommendations: {
    id: 1,
    doctor: 'Угрюмов Олег Петрович',
    setDate: new Date(),
    expireDate: new Date(today.setDate(today.getDate() + 1)),
    text: 'Употребление меньшего количества соли, нормализация сна, здоровый образ жизни, просьба прийти на прием 26 октября'
  },
  selfControlBlock: {
    parameters: [
      {
        id: 'PULSE',
        title: 'Пульс',
        type: 'text',
        time: [
          {
            id: 'PULSE_1000',
            label: '10:00',
            value: 70
          },
          {
            id: 'PULSE_DAY',
            label: 'день',
            value: 80
          },
          {
            id: 'PULSE_2200',
            label: '22:00',
            value: 60
          }
        ]
      },
      {
        id: 'DYHANIE',
        title: 'Дыхание',
        type: 'text',
        time: [
          {
            id: 'DYHANIE_1100',
            label: '11:00',
            value: 15
          },
          {
            id: 'DYHANIE_1400',
            label: '14:00',
            value: ''
          },
          {
            id: 'DYHANIE_2200',
            label: '22:00',
            value: ''
          }
        ]
      },
      {
        id: 'AT',
        title: 'Артериальное давление',
        hint: '000/00',
        type: 'text',
        time: [
          {
            id: 'AT_Morning',
            label: 'утро',
            value: '100/60'
          },
          {
            id: 'AT_Day',
            label: 'день',
            value: ''
          },
          {
            id: 'AT_Evening',
            label: 'вечер',
            value: ''
          },
          {
            id: 'AT_Night',
            label: 'ночь',
            value: ''
          }
        ]
      },
    ]
  }
};

var diaryEmpty = {

};

var params = [
  {ID: 'AT', name: 'Артериальное давление', existedTimeValues: ['MORNING', 'DAY', 'EVENING', 'NIGHT']},
  {ID: 'WEIGHT', name: 'Вес', existedTimeValues: []},
  {ID: 'RHITM', name: 'Сердечный ритм', existedTimeValues: []},
  {ID: 'BLOOD', name: 'Сахар крови', existedTimeValues: ['MORNING', 'DAY', 'EVENING']},
  {ID: 'CHSS', name: 'Чсс', existedTimeValues: ['MORNING', 'DAY']}
];

module.exports = {
  patientDoctors: patientDoctors,
  doctorsPatient: doctorsPatient,
  fio: fio,
  doctorsFio: doctorsFio,
  devices: devices,
  diaryToday: diaryToday,
  diaryEmpty: diaryEmpty,
  params: params
};
