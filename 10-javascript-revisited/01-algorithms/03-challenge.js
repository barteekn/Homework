// Challenge 3 - Numer telefonu (do zdobycia: 0.5 pkt.)
// Nowa funkcja odkomentowana, stara zakomentowana.

function createPhoneNumber(numbers) {
  return `(${numbers.slice(0, 3).join("")}) ${numbers.slice(3, 6).join("")}-${numbers.slice(6).join("")}`;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// function makePhoneNumber(numbers) {
//   return (
//     "(" +
//     "+" +
//     numbers[3] +
//     numbers[7] +
//     ") " +
//     numbers[6] +
//     numbers[1] +
//     numbers[4] +
//     "-" +
//     numbers[0] +
//     numbers[0] +
//     numbers[0] +
//     "-" +
//     numbers[9] +
//     numbers[3] +
//     numbers[8] +
//     " YES!"
//   );
// }
// console.log(makePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
