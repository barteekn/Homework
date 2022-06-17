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

function emojiTranslator(string) {
  let emoji = "";
  for (let i = 0; i < arguments.length; i++) {
    if (emojiMap[arguments[i]]) {
      emoji += emojiMap[arguments[i]];
    }
  }
  return emoji;
}

emojiTranslator("Jestem developrem", "frontend", ":D");
