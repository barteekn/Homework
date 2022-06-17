function changeNumbers(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i] + 1);
    } else {
      newArr.push(arr[i] - 1);
    }
  }
  return newArr;
}
console.log(changeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(changeNumbers([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(changeNumbers([0, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(changeNumbers([222, 444, 666, 888, 999]));
console.log(changeNumbers([22, 33, 444, 555, 6666, 7777]));
