// Challenge 7 - Policz czas zajęć

const course = [
    {
      id: 1,
      name: '[HTML] Narzędzia i podstawy składni',
      length: '03:00:00'
    },
    {
      id: 2,
      name: '[HTML] Semantyka i dostępność',
      length: '01:02:33'
    },
    {
      id: 3,
      name: '[CSS] Kaskada i precyzyjność selektorów',
      length: '02:30:00'
    },
    {
      id: 4,
      name: '[CSS] Box model i position',
      length: '01:00:12'
    },
    {
      id: 5,
      name: '[CSS] Flexbox',
      length: '01:11:33'
    },
      {
      id: 6,
      name: '[JS] Zmienne, stałe, funkcje, scope',
      length: '01:09:43'
    },
    {
      id: 7,
      name: '[JS] Wyrażenia i instrukcje warunkowe',
      length: '02:37:20'
    },
    {
      id: 8,
      name: '[JS] Funkcje wyższego rzędu i domknięcia',
      length: '01:30:42'
    },
    {
      id: 9,
      name: '[JS] Fetch API',
      length: '01:14:48'
    },
  ];

  function getCourseLength(course) {
    let result = 0;
    for (let i = 0; i < course.length; i++) {
      let time = course[i].length.split(':');
      result += parseInt(time[0]) * 60 * 60 + parseInt(time[1]) * 60 + parseInt(time[2]);
    }
    return result;
  };

  console.log(getCourseLength(course));