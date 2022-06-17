// Challenge 2 - Walidator hasła (do zdobycia: 0.5 pkt.)

function isPasswordCorrect(password) {
  return password === "12345678";
}
console.log(isPasswordCorrect("87654321"));

function CheckPassword(password) {
  var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,10}$/;
  if (password.match(paswd)) {
    return true;
  } else {
    return false;
  }
}
console.log(CheckPassword("Bartek123!"));
console.log(CheckPassword("bartek123"));
console.log(CheckPassword("Bartek!@#2"));
console.log(CheckPassword("testIS123@"));
