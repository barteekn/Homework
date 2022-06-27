// Challenge 6 - Translator emoji (do zdobycia: 0.5 pkt.)

const emojiMap = {
  frontend: "💻",
  close: "❌",
  infoShare: "🎓",
  ":D": "😀",
  ":)": "🙂",
  ":O": "😲",
  ":(": "🙁",
};

function emojiTranslator(str) {
  return str
    .split(" ")
    .map((word) => {
      if (emojiMap[word]) {
        return emojiMap[word];
      }
      return word;
    })
    .join("");
}
console.log(emojiTranslator("Jestem developerem! :frontend"));
