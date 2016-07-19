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
  health: "Очень хорошее",
  controlBlocks: [
    {
      from: {
        id: 1,
        doctor: 'Угрюмов Олег Петрович'
      },
      timeParameters: [
        {
          id: 1,
          title: 'Артериальное давление',
          type: 'time',
          hint: '100/10',
          time: [
            {
              type: 'утро',
              value: '100/60'
            },
            {
              type: 'день',
              value: ''
            },
            {
              type: 'вечер',
              value: ''
            },
            {
              type: 'ночь',
              value: ''
            }
          ]
        },
        {
          id: 2,
          title: 'ЧСС',
          type: 'time',
          hint: '70',
          time: [
            {
              type: 'утро',
              value: ''
            },
            {
              type: 'день',
              value: ''
            }
          ]
        }
      ]
    }
  ]
};

var diaryEmpty = {
  health: "",
  controlBlocks: []
};

module.exports = {
  patientDoctors: patientDoctors,
  fio: fio,
  devices: devices,
  diaryToday: diaryToday,
};
