// Challenge 7 - Hashtag Finder

function hashtagFinder(string) {
  let hashtags = [];
  let hashtag = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "#") {
      let j = i + 1;
      while (j < string.length && string[j] !== " ") {
        hashtag += string[j];
        j++;
      }
      hashtags.push(hashtag);
      hashtag = "";
    }
  }
  return hashtags;
}
const tagFinder = hashtagFinder(
  "#Bartek #Nowakowski #JavaScript #Java #C# #PHP #Python #C++ #C"
);
console.log(tagFinder);
