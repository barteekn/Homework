// Challenge 2 - Czy zostanę Junior Developerem?

const students = [
  { name: "Zbigniew", tasksDone: 150, hoursSpent: 160 },
  { name: "Krystyna", tasksDone: 1, hoursSpent: 1 },
  { name: "Krzysztof", tasksDone: 100, hoursSpent: 80 },
  { name: "Seba", tasksDone: 200, hoursSpent: 40 },
  { name: "Dagmara", tasksDone: 50, hoursSpent: 100 },
  { name: "Kasia", tasksDone: 150, hoursSpent: 40 },
  { name: "Bartek", tasksDone: 116, hoursSpent: 103 },
];

const requirements = {
  minHoursSpent: 80,
  minTasksDone: 100,
};

function isJuniorDeveloper(student) {
  return (
    student.hoursSpent >= requirements.minHoursSpent &&
    student.tasksDone >= requirements.minTasksDone
  );
}

function checkJuniorReq(students) {
  return students.filter(isJuniorDeveloper);
}

console.log(students.filter(isJuniorDeveloper));
console.log(checkJuniorReq(students));
