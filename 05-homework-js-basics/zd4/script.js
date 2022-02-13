function createUser(name, surname, PESEL, university) {
    return name +' ' + surname +' ' + PESEL +' ' + university;
}

console.log(createUser('Bartek', 'Nowakowski', '123456789', 'Programowanie'));

console.log(createUser({

    name: 'Bartek',
    surname: 'Nowakowski',
    PESEL: '123456789'
    university: 'Programowanie'
}));
