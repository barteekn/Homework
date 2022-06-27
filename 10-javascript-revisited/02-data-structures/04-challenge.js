// Challenge 4 - Studenci i grupy studenckie
    // Utwórz funkcję getGroupsWithStudents, która przyjmuje dwa parametry będące tablicami. Tablice będą reprezentować kolejno informacje o grupie studenckiej i informacje o studentach. Funkcja powinna zwrócić jedną tablicę, gdzie grupy studentów zostaną połączone z studentami na podstawie identyfikatorów.

    // UWAGA: Uczniowie w grupach powinni być uporządkowani w taki sam sposób, w jaki zostały uporządkowane identyfikatory uczniów w ramach grupy studenckiej (według klucza studentIds).

    // Przykład:

    // getGroupsWithStudents([
    //   { 
    //     id: 1,
    //     name: "G1",
    //     studentIds: [2, 1]
    //   }
    // ], [
    //   { 
    //     id: 1,
    //     name: "John"
    //   },
    //   {
    //     id: 2,
    //     name: "Steve"
    //   }
    // ]) // => [
    //{ 
    //  id: 1,
    //  name: "G1",
    //  students: [
    //    {
    //      id: 2,
    //      name: "Steve"
    //    },
    //    { 
    //      id: 1, 
    //      name: "John"
    //    }
    //  ]
    //}
    //]

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
        }
    ];

    function getGroupsWithStudents(groups, students) {
        return groups.map((group) => {
            const students = group.studentsIds.map((studentsId) => {
                return students.find((student) => student.id === studentsId);
            });
            return {
                id: group.id,
                name: group.name,
                students: students
            };
        });
    }

    console.log(getGroupsWithStudents([
        {
            id: 1,
            name: "G1",
            studentIds: [2, 1]
        }
    ], students));
    


// const students = [
//     { 
//     id: 01,
//     name: 'Bartek',
//     studentIds: [4, 2],
//     group: 'A',
//     },
//     {
//     id: 02,
//     name: 'Adam',
//     studentIds: [1, 2, 3],
//     group: 'B',
//     },
//     {
//     id: 03,
//     name: 'Kasia',
//     studentIds: [1, 2, 3, 4],
//     group: 'A'
//     },
//     {
//     id: 04,
//     name: 'Krystian',
//     studentIds: [1, 2, 3, 4, 5],
//     group: 'B',
//     },
//     {
//     id: 05,
//     name: 'Olek',
//     studentIds: [1, 2, 3, 4, 5, 6],
//     group: 'c',
//     },
//     {
//     id: 06,
//     name: 'Majka',
//     studentIds: [1, 2, 3, 4, 5, 6, 7],
//     group: 'c',
//     },
//     {
//     id: 07,
//     name: 'Kasia',
//     studentIds: [1, 2, 3, 4, 5, 6, 7, 8],
//     group: '-',
//     }
// ];

// function getGroupsWithStudents(students) {
//     let groups = [];
//     for (let i = 0; i < students.length; i++) {
//         if (!groups.includes(students[i].group)) {
//             groups.push(students[i].group);
//         } else {
//             groups.push(students[i].group);
//         }
//         }

    
//     return groups;
// };

// console.log(getGroupsWithStudents(students));