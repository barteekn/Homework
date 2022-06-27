// Challenge 2 - Walidator hasła (do zdobycia: 0.5 pkt.)
// Dodane nowe consol.logi tak aby były zgodne z Przykładem z GitHub.com

function CheckPassword (password) {
  return password === "12345678";
}
// console.log(CheckPassword("87654321"));

function isPasswordCorrect(password) {
  var passwrd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,10}$/;
  if (password.match(passwrd)) {
    return true;
  } else {
    return false;
  }
}
// console.log(isPasswordCorrect("Bartek123!"));
// console.log(isPasswordCorrect("bartek123"));
// console.log(isPasswordCorrect("Bartek!@#2"));
// console.log(isPasswordCorrect("testIS123@"));

console.log(isPasswordCorrect("infoShare"));
console.log(isPasswordCorrect("qwerty123"));
console.log(isPasswordCorrect("qwerty123!"));
