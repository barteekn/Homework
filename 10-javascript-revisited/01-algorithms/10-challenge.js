// Challenge 10 - Współczynnik dwumianowy

function binominalCoefficient(n, k) {
  let result = 1;
  for (let i = 1; i <= k; i++) {
    result *= n - k + i;
    result /= i;
  }
  return result;
}

console.log(binominalCoefficient(5, 3));
console.log(binominalCoefficient(10, 5));
console.log(binominalCoefficient(20, 10));
console.log(binominalCoefficient(50, 25));
