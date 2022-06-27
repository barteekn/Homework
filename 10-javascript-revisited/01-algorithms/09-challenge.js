// Challenge 9 - Szyfr Cezara (do zdobycia: 0.5 pkt.)
// Nowa funkcja odkomentowana, stara zakomentowana.

function caesarCipher(string) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  let char = "";
  for (let i = 0; i < string.length; i++) {
    char = string[i];
    if (alphabet.includes(char)) {
      let index = alphabet.indexOf(char);
      result += alphabet[index + 5];
    } else if (alphabetUpper.includes(char)) {
      let index = alphabetUpper.indexOf(char);
      result += alphabetUpper[index + 5];
    } else {
      result += char;
    }
  }
  return result;
}
console.log(caesarCipher("Nauka JavaScriptu daje efekty"));
console.log(caesarCipher("infoShare"));

// function caesarCipher(str, num) {
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === " ") {
//       newStr += " ";
//     } else {
//       newStr += String.fromCharCode(str.charCodeAt(i) + num);
//     }
//   }
//   return newStr;
// }

// console.log(caesarCipher("infoShare", 1));
// console.log(caesarCipher("Nauka JS daje efekty", 2));
// console.log(caesarCipher("Chyba mi sie udalo z tym Szyfrem Cezara", 3));
