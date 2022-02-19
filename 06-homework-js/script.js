const studentsList = ["Jacek Kowalski", "Ewa Nowak", "Zygmunt Lewandowski", "Bartek Cebulski", "Jadwiga Zelman"]

const students = [
    {
       id: 1,
       pesel: '123456789',
       name: "Jacek Kowalski",
       notes: [5, 3, 4, 2, 5, 5]
    },
    {
       id: 2,
       pesel: '234567890',
       name: "Ewa Nowak",
       notes: [2, 3, 3, 3, 2, 5]
    },
    {
       id: 3,
       pesel: '345678901',
       name: "Zygmunt Lewandowski",
       notes: [2, 2, 4, 4, 3, 3]
    },
    {
        id: 4,
        pesel: '456789012',
        name: "Bartek Cebulski",
        notes: [4, 4, 5, 5, 2, 3]
     },
     {
        id: 5,
        pesel: '567890123',
        name: "Jadwiga Zelman",
        notes: [5, 5, 4, 3, 2, 1]
     }
 ];


 const getMaxNote = students.filter(function (search) {
         return search.notes.includes(5)
     });
     console.log(getMaxNote)

const getMinNote = students.filter(function (search) {
        return search.notes.includes(1)
    });
    console.log(getMinNote)

    // for (let notes in students) {
    //        console.log(students);

// function getMaxNote(studentnotes, studentid, getMaxNoteFn) {
//     if ()
// };
// console.log(getMaxNote);



//  const students
// function getMaxNote (notes, cb) {
//     var count = 0;
//     for (var i = 0; i < list.length; i++) {
//       if (cb(list[i]) === true) {
//         count += 1;
//       }
//     }
//     return count;
//   };