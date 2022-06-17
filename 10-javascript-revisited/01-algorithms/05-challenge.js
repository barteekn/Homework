// Challenge 5 - Policz słowa (do zdobycia: 0.5 pkt.)

function countOccurrences(string, char) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      count++;
    }
  }
  return count;
}
console.log(countOccurrences("Bartek Nowakowski", "t"));
console.log(countOccurrences("Bartek Nowakowski", "a"));
console.log(countOccurrences("Bartek Nowakowski", "k"));
console.log(
  countOccurrences(
    "JavaScript byl dla mnie skomplikowany a teraz JavaScript jest znacznie prostszy"
  )
);

function countWordOccurrences(string, word) {
  let count = 0;
  let wordLength = word.length;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === word[0]) {
      let j = 1;
      while (j < wordLength) {
        if (string[i + j] !== word[j]) {
          break;
        }
        j++;
      }
      if (j === wordLength) {
        count++;
      }
    }
  }
  return count;
}
console.log(countWordOccurrences("Bartek Nowakowski", "Nowakowski"));
