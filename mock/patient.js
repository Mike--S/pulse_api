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
      timeParameters: [
        {
          id: 'AT',
          title: 'Артериальное давление',
          hint: '000/00',
          time: [
            {
              type: 'AT_Morning',
              label: 'утро',
              value: '100/60'
            },
            {
              type: 'AT_Day',
              label: 'день',
              value: ''
            },
            {
              type: 'AT_Evening',
              label: 'вечер',
              value: ''
            },
            {
              type: 'AT_Night',
              label: 'ночь',
              value: ''
            }
          ]
        },
        {
          id: 'CHSS',
          title: 'ЧСС',
          hint: '00',
          time: [
            {
              type: 'CHSS_Morning',
              label: 'утро',
              value: '10'
            },
            {
              type: 'CHSS_Day',
              label: 'день',
              value: ''
            }
          ]
        },
        {
          id: 'BLOOD',
          title: 'Сахар крови',
          type: 'time',
          hint: '0.0',
          time: [
            {
              type: 'BLOOD_Morning',
              label: 'утро',
              value: '3.3'
            },
            {
              type: 'BLOOD_Day',
              label: 'день',
              value: ''
            },
            {
              type: 'BLOOD_Evening',
              label: 'вечер',
              value: ''
            },
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
