function caesarCipher(str, num) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      newStr += " ";
    } else {
      newStr += String.fromCharCode(str.charCodeAt(i) + num);
    }
  }
  return newStr;
}

console.log(caesarCipher("infoShare", 1));
console.log(caesarCipher("Nauka JS daje efekty", 2));
console.log(caesarCipher("Chyba mi sie udalo z tym Szyfrem Cezara", 3));
