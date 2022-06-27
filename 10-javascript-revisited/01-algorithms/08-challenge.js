// Challenge 8 - Konwertuj na camelCase
// Nowa funkcja odkomentowana, stara zakomentowana.

function toCamelCase(str) {
  return str
    .split("-")
    .map((word, index) => {
      if (index === 0) {
        return word;
      }
      return word[0].toUpperCase() + word.slice(1);
    })
    .join("");
}
console.log(toCamelCase("java_script"));
console.log(toCamelCase("Java-Script"));
console.log(toCamelCase("asp_Net_Core"));

// camelCase = function camelCase(str) {
//   return str.replace(/\W+(.)/g, function (chr) {
//     return chr.toUpperCase();
//   });
// };
// kebabCase = function kebabCase(str) {
//   return str.replace(/\W+/g, "-");
// };
// snakeCase = function snakeCase(str) {
//   return str.replace(/\W+/g, "_");
// };

// TitleCase = function TitleCase(str) {
//   return str.replace(/\W+/g, " ").replace(/\s(.)/g, function (chr) {
//     return chr.toUpperCase();
//   });
// };
// toLowerCase = function toLowerCase(str) {
//   return str.toLowerCase();
// };
// toUpperCase = function toUpperCase(str) {
//   return str.toUpperCase();
// };

// console.log(camelCase("hello world camelcase"));
// console.log(kebabCase("HelloWorld JavaScript KebabCase"));
// console.log(snakeCase("HelloWorld JavaScript SnakeCase"));
// console.log(TitleCase("hello world java script title case"));
// console.log(toLowerCase("HELLO WORLD JAVASCRIPT lowercase"));
// console.log(toUpperCase("hello wordl javascript UPPERCASE"));
