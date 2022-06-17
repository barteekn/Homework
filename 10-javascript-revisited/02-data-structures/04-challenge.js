// Challenge 4 - Studenci i grupy studenckie

const students = [
    { 
    id: 01,
    name: 'Bartek',
    studentIds: [4, 2],
    group: 'A',
    },
    {
    id: 02,
    name: 'Adam',
    studentIds: [1, 2, 3],
    group: 'B',
    },
    {
    id: 03,
    name: 'Kasia',
    studentIds: [1, 2, 3, 4],
    group: 'A'
    },
    {
    id: 04,
    name: 'Krystian',
    studentIds: [1, 2, 3, 4, 5],
    group: 'B',
    },
    {
    id: 05,
    name: 'Olek',
    studentIds: [1, 2, 3, 4, 5, 6],
    group: 'c',
    },
    {
    id: 06,
    name: 'Majka',
    studentIds: [1, 2, 3, 4, 5, 6, 7],
    group: 'c',
    },
    {
    id: 07,
    name: 'Kasia',
    studentIds: [1, 2, 3, 4, 5, 6, 7, 8],
    group: '-',
    }
];

function getGroupsWithStudents(students) {
    let groups = [];
    for (let i = 0; i < students.length; i++) {
        if (!groups.includes(students[i].group)) {
            groups.push(students[i].group);
        } else {
            groups.push(students[i].group);
        }
        }

    
    return groups;
};

console.log(getGroupsWithStudents(students));