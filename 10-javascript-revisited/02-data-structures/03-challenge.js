// Challenge 3 - Najlepsze stopnie uczniów
// Nowa funkcja odkomentowana, stara zakomentowana.
// Summary update with other challenges.

const students = [
  {
    id: 1,
    name: "Jacek",
    grades: [5, 3, 4, 2, 5, 5],
  },
  {
    id: 2,
    name: "Ewa",
    grades: [2, 3, 3, 3, 2, 5],
  },
  {
    id: 3,
    name: "Zygmunt",
    grades: [2, 2, 4, 4, 3, 3],
  },
];

function getStudentTopGrades(students) {
  return students.map((student) => {
    const grades = student.grades;
    const maxGrade = Math.max(...grades);
    return maxGrade;
  });
}

function getStudentTopGrades(students) {
  return students.map((student) => {
    const grades = student.grades;
    const maxGrade = Math.max(...grades);
    return maxGrade;
  });
}

console.log(getStudentTopGrades(students));

// function getStudentTopGrades(students) {
//   let highestGrade = 0;
//   let getStudentTopGrades;
//   for (let i = 0; i < students.length; i++) {
//     let sum = 0;
//     for (let j = 0; j < students[i].grades.length; j++) {
//       sum += students[i].grades[j];
//     }
//     if (sum > highestGrade) {
//       highestGrade = sum;
//       getStudentTopGrades = students[i];
//     }
//   }
//   return getStudentTopGrades;
// }

// console.log(getStudentTopGrades(students));
