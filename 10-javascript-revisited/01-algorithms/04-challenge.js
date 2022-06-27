// Challenge 4 - Przeplatanie cyfr (do zdobycia: 0.5 pkt.)
// Nowa funkcja odkomentowana, stara zakomentowana.

function interlaceAndChangeNumber(num1, num2) {
  let result = "";
  let num1Str = num1.toString();
  let num2Str = num2.toString();
  let num1Length = num1Str.length;
  let num2Length = num2Str.length;
  let num1Index = 0;
  let num2Index = 0;
  for (let i = 0; i < num1Length + num2Length; i++) {
    if (i % 2 === 0) {
      result += num1Str[num1Index];
      num1Index++;
    } else {
      result += num2Str[num2Index];
      num2Index++;
    }
  }
  return parseInt(result);
}
console.log(interlaceAndChangeNumber(111, 999));
console.log(interlaceAndChangeNumber(1234, 567));
console.log(interlaceAndChangeNumber(12, 5555));

// function changeNumbers(arr) {
//   var newArr = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       newArr.push(arr[i] + 1);
//     } else {
//       newArr.push(arr[i] - 1);
//     }
//   }
//   return newArr;
// }
// console.log(changeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
// console.log(changeNumbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(changeNumbers([0, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
// console.log(changeNumbers([222, 444, 666, 888, 999]));
// console.log(changeNumbers([22, 33, 444, 555, 6666, 7777]));
