
function suma(a, b) {


    if (typeof (b) === 'undefined') {
        console.log(`wynik funkcji jest pierwszym parametrem ${a}`);

    } else if (typeof (a) !== 'number' || typeof (b) !== 'number') {
        console.log("Niepoprawny parametr")

    } else {
        console.log(`wynik DODAWANIA to ${a + b}`);
        console.log(`wynik ODEJMOWANIA to ${a - b}`);
        console.log(`wynik MNOŻENIA to ${a * b}`);
        console.log(`wynik DZIELENIA to ${a / b}`);

        console.log(a > b);
        console.log(a < b);
    }

}

suma(40, 30);
suma(-40, 30);
suma(40, -30);
suma(-30);
suma(40, 'NUMER');
suma("infoShare", " Academy Sp. z o.o.");