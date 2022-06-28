// Challenge 2 - Czy zostanę Junior Developerem?
// Nowa funkcja odkomentowana, stara zakomentowana.

const students = [
  { name: "Zbigniew", tasksDone: 150, hoursSpent: 160 },
  { name: "Krystyna", tasksDone: 1, hoursSpent: 1 },
  { name: "Krzysztof", tasksDone: 100, hoursSpent: 80 },
  { name: "Seba", tasksDone: 200, hoursSpent: 40 },
  { name: "Dagmara", tasksDone: 50, hoursSpent: 100 },
];

const requirements = {
  minHoursSpent: 80,
  minTasksDone: 100,
};

function checkJuniorReq (students, requirements) {
  let juniorStudents = [];
  let seniorStudents = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].hoursSpent >= requirements.minHoursSpent && students[i].tasksDone >= requirements.minTasksDone) {
      juniorStudents.push(students[i].name);
    } else {
      seniorStudents.push(students[i].name);
    }
  }
  return `${juniorStudents.join(', ')} - gratulacje! Ciężka praca popłaca! ${seniorStudents.join(', ')} - DO ROBOTY LENIE!`;
}
console.log(checkJuniorReq(students, requirements));

// const students = [
//   { name: "Zbigniew", tasksDone: 150, hoursSpent: 160 },
//   { name: "Krystyna", tasksDone: 1, hoursSpent: 1 },
//   { name: "Krzysztof", tasksDone: 100, hoursSpent: 80 },
//   { name: "Seba", tasksDone: 200, hoursSpent: 40 },
//   { name: "Dagmara", tasksDone: 50, hoursSpent: 100 },
//   { name: "Kasia", tasksDone: 150, hoursSpent: 40 },
//   { name: "Bartek", tasksDone: 116, hoursSpent: 103 },
// ];

// const requirements = {
//   minHoursSpent: 80,
//   minTasksDone: 100,
// };

// function isJuniorDeveloper(student) {
//   return (
//     student.hoursSpent >= requirements.minHoursSpent &&
//     student.tasksDone >= requirements.minTasksDone
//   );
// }

// function checkJuniorReq(students) {
//   return students.filter(isJuniorDeveloper);
// }

// console.log(students.filter(isJuniorDeveloper));
// console.log(checkJuniorReq(students));
