// Challenge 1 - Suma, iloczyn, średnia i ekstrema

exampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
nameArray = ["Bartek", "Adam", "Olek", "Kasia", "Krystian"];
surnameArray = ["Nowakowski", "Filipowicz", "Nowak", "Skiba", "Chrupczalski"];

function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function multiply(array) {
  let multiply = 1;
  for (let i = 0; i < array.length; i++) {
    multiply *= array[i];
  }
  return multiply;
}

function average(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

function min(array) {
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}

function max(array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

function sumOfSquares(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i] * array[i];
  }
  return sum;
}

function squareOfSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum * sum;
}

function sumOfCubes(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i] * array[i] * array[i];
  }
  return sum;
}

console.log(sum(exampleArray));
console.log(sum(nameArray));
console.log(sum(surnameArray));
console.log(multiply(exampleArray));
console.log(average(exampleArray));
console.log(min(exampleArray));
console.log(min(nameArray));
console.log(min(surnameArray));
console.log(max(exampleArray));
console.log(max(nameArray));
console.log(max(surnameArray));
console.log(sumOfSquares(exampleArray));
console.log(squareOfSum(exampleArray));
console.log(sumOfCubes(exampleArray));
