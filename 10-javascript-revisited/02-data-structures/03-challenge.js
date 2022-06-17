// Challenge 3 - Najlepsze stopnie uczniów

const students = [
  { id: 1, name: "Bartek", grades: [5, 4, 5, 2, 3, 2, 2, 3, 3, 2] },
  { id: 2, name: "Kasia", grades: [2, 1, 1, 1, 1, 2, 3, 4, 5, 6] },
  { id: 3, name: "Adam", grades: [5, 5, 4, 5, 6, 5, 6, 6, 1, 2] },
  { id: 4, name: "Krystian", grades: [1, 2, 3, 4, 5, 6, 5, 4, 3, 1] },
];

function getStudentTopGrades(students) {
  let highestGrade = 0;
  let getStudentTopGrades;
  for (let i = 0; i < students.length; i++) {
    let sum = 0;
    for (let j = 0; j < students[i].grades.length; j++) {
      sum += students[i].grades[j];
    }
    if (sum > highestGrade) {
      highestGrade = sum;
      getStudentTopGrades = students[i];
    }
  }
  return getStudentTopGrades;
}

console.log(getStudentTopGrades(students));
