// Challenge 3 - Numer telefonu (do zdobycia: 0.5 pkt.)

function makePhoneNumber(numbers) {
  return (
    "(" +
    "+" +
    numbers[3] +
    numbers[7] +
    ") " +
    numbers[6] +
    numbers[1] +
    numbers[4] +
    "-" +
    numbers[0] +
    numbers[0] +
    numbers[0] +
    "-" +
    numbers[9] +
    numbers[3] +
    numbers[8] +
    " YES!"
  );
}
console.log(makePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
