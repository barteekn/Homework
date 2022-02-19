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
   ];

    studentsAdd = {
        id: 4,
        pesel: '456789012',
        name: "Bartek Cebulski",
        notes: [4, 4, 6, 5, 2, 3]
     };

     studentsAdd1 = {
        id: 5,
        pesel: '567890123',
        name: "Jadwiga Zelman",
        notes: [5, 5, 4, 3, 2, 1]
     };
 
     students.push(studentsAdd, studentsAdd1);
     console.log(students);

//////////////////////////////////////////////////////////////////////////////// 

const getMaxNote = (studentsArray, studnetId, callback) => {
   for (let i = 0; i < studentsArray.length; i++) {
      if (studnetId === studentsArray[i].pesel) {
       return studnetId = i;
      }
      const max = Math.max(...studentsArray[studnetId].notes);
      console.log(max);

      return callback(studentsArray[i], max, 'max')
   }
};

const displayInfo = (studentName, note, check) => {
   if (check) {
      console.log(`Max note for student ${studentName.name} is ${note}`)
   } else {
      console.log(`Min note for student ${studentName.name} is ${note}`)
   }
      
};

const getMinNote = (studentsArray, studnetId, callback) => {
   for (let i=0; i < studentsArray.length; i++) {
      if (studnetId === studentsArray[i].pesel) {
      return;
      }
      const min = Math.min(...studentsArray[i].notes);
      console.log(min);

      return callback(studentsArray[i], min)
      }
 };