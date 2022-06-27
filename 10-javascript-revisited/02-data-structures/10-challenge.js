// Challenge 10 - Jak masz na imię złoczyńco?! (do zdobycia: 0.5 pkt.)
// Nowa funkcja odkomentowana, stara zakomentowana.

const monthsArray = [
    {
    January: "The Evil",
    February: "The Vile",
    March: "The Cruel",
    April: "The Trashy",
    May: "The Despicable",
    June: "The Embarrassing",
    July: "The Disreputable",
    August: "The Atrocious",
    September: "The Twirling",
    October: "The Orange",
    November: "The Terrifying",
    December: "The Awkward"
}
];  

const days = {
    [0]: "Mustache",
    [1]: "Pickle",
    [2]: "Hood Ornament",
    [3]: "Raisin",
    [4]: "Recycling Bin",
    [5]: "Potato",
    [6]: "Tomato",
    [7]: "House Cat",
    [8]: "Teaspoon",
    [9]: "Laundry Basket"
}

const getVillainName = (date, monthsArray, days) => {
    const month = date.getMonth();
    const day = date.getDate();
    const monthName = Object.keys(monthsArray[0])[month];
    const dayName = days[day % 10];
    return `${monthsArray[0][monthName]} ${dayName}`;
}

console.log(getVillainName(new Date("June 9"), monthsArray, days));
console.log(getVillainName(new Date("November 30"), monthsArray, days));
console.log(getVillainName(new Date("January 1"), monthsArray, days));
console.log(getVillainName(new Date("May 3"), monthsArray, days));
console.log(getVillainName(new Date("August 31"), monthsArray, days));


// const monthNames = [
//     {
//     January: "The Evil",
//     February: "The Vile",
//     March: "The Cruel",
//     April: "The Trashy",
//     May: "The Despicable",
//     June: "The Embarrassing",
//     July: "The Disreputable",
//     August: "The Atrocious",
//     September: "The Twirling",
//     October: "The Orange",
//     November: "The Terrifying",
//     December: "The Awkward"
// }
// ]

// const numberName = [
//     {
//     0: "Mustache",
//     1: "Pickle",
//     2: "Hood Ornament",
//     3: "Raisin",
//     4: "Recycling Bin",
//     5: "Potato",
//     6: "Tomato",
//     7: "House Cat",
//     8: "Teaspoon",
//     9: "Laundry Basket",
//     10: "Pillow",
//     11: "Pizza",
// }
// ]

// function getVillainName (month) {
//     for (let i = 0; i < monthNames.length; i++) {
//         for (let key in monthNames[i]) {
//             if (key === month) {
//                 return monthNames[i][key];
//             }
//         }
//     }
// };

// console.log(getVillainName("March"));






