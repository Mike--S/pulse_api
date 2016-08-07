var today = new Date;
var patientDoctors = {
  therapist: [
    'Угрюмов Олег Петрович'
  ],
  consultants: [
    'Семенов Сергей Петрович',
    'Глазырин Алексей Иванович',
    'Глазырин Алексей Иванович',
    'Глазырин Алексей Иванович',
    'Глазырин Алексей Иванович'
  ]
};

var fio = 'Еремин Виталий Викторович';

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
  }
};

var diaryEmpty = {

};

module.exports = {
  patientDoctors: patientDoctors,
  fio: fio,
  devices: devices,
  diaryToday: diaryToday,
  diaryEmpty: diaryEmpty
};
