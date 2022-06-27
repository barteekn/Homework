// Challenge 10 - Współczynnik dwumianowy
// Nowa funkcja odkomentowana, stara zakomentowana.

function binominalCoefficient(n, k) {
  if (k > n) {
    return 0;
  }
  let result = 1;
  for (let i = 1; i <= k; i++) {
    result *= n - i + 1;
    result /= i;
  }
  return result;
}
console.log(binominalCoefficient(1, 1));
console.log(binominalCoefficient(10, 2));
console.log(binominalCoefficient(10, 5));
console.log(binominalCoefficient(52, 5));
console.log(binominalCoefficient(52, 10));

// function binominalCoefficient(n, k) {
//   let result = 1;
//   for (let i = 1; i <= k; i++) {
//     result *= n - k + i;
//     result /= i;
//   }
//   return result;
// }

// console.log(binominalCoefficient(5, 3));
// console.log(binominalCoefficient(10, 5));
// console.log(binominalCoefficient(20, 10));
// console.log(binominalCoefficient(50, 25));
