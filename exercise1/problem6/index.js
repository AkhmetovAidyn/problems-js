function insertWhitespace(str) {
  // Your code
  const result = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  return result;
}

console.log(insertWhitespace("SheWalksToTheBeach")) // "She Walks To The Beach"

console.log(insertWhitespace("MarvinTalksTooMuch")) // "Marvin Talks Too Much"

console.log(insertWhitespace("TheGreatestUpsetInHistory")) // "The Greatest Upset In History"

module.exports = insertWhitespace;