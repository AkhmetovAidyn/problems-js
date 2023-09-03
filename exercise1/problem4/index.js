function makeTitleCase(str) {
  // Your code
  const words = str.split(" ");
  const titleCaseWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return titleCaseWords.join(" ");
}

console.log(makeTitleCase("This is a title")) // "This Is A Title"

console.log(makeTitleCase("capitalize every word")) // "Capitalize Every Word"

console.log(makeTitleCase("I Like Pizza")) // "I Like Pizza"

console.log(makeTitleCase("PIZZA PIZZA PIZZA")) // "PIZZA PIZZA PIZZA"

module.exports = makeTitleCase;
