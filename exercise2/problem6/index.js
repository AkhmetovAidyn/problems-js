function mapping(arr) {
  // Your code
  const result = {};

  for (const letter of arr) {
    result[letter] = letter.toUpperCase();
  }
  return result;
}

console.log(mapping(["p", "s"])); // { "p": "P", "s": "S" }
console.log(mapping(["a", "b", "c"])); // { "a": "A", "b": "B", "c": "C" }
console.log(mapping(["a", "v", "y", "z"])); // { "a": "A", "v": "V", "y": "Y", "z": "Z" }

module.exports = mapping;
