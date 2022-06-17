const monthNames = [
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
]

const numberName = [
    {
    0: "Mustache",
    1: "Pickle",
    2: "Hood Ornament",
    3: "Raisin",
    4: "Recycling Bin",
    5: "Potato",
    6: "Tomato",
    7: "House Cat",
    8: "Teaspoon",
    9: "Laundry Basket",
    10: "Pillow",
    11: "Pizza",
}
]

function getVillainName (month) {
    for (let i = 0; i < monthNames.length; i++) {
        for (let key in monthNames[i]) {
            if (key === month) {
                return monthNames[i][key];
            }
        }
    }
};

console.log(getVillainName("March"));






