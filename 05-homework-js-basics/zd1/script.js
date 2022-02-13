// #1

function suma (a, b) {

    console.log(`Suma DODAWANIA to ${a + b}`);
    console.log(`Suma ODEJMOWANIA to ${a - b}`);
    console.log(`Suma MNOŻENIA to ${a * b}`);
    console.log(`Suma DZIELENIA to ${a / b}`);
    
    console.log(a > b);
    console.log(a < b);

if (typeof (a || b)) {
                console.log("Niepoprawny parametr!")
            }
            else if (typeof (a || "x")) {
                console.log("undefined")
            }

}


suma(50, 30);




// suma(`oqrwa!`);
// suma(a, b)


// if (suma !== "number") {
                
//     console.log("Niepoprawny parametr!");

// } else if (suma === 'undefined') {

//     console.log(a);

// } 