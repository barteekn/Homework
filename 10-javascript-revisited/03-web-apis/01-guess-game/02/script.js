var randomNumber = Math.floor(Math.random() * 10);
var guess = prompt("Guess any number from 0 to 10 only");
if (guess >= 0 && guess <= 10) {
  if (guess == randomNumber) {
    alert("Congratulations you guess the system choice of " + guess);
  } else {
    alert(
      "Ohh you failed to guess the system " +
        "Generated number of " +
        randomNumber
    );
  }
}
