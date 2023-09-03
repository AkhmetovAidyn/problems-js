function removeABC(str) {
  // Your code
  const result = str.replace(/[abc]/g, '');

  if (result === str) {
    return null;
  }
  return result;
}

console.log(removeABC("This might be a bit hard")); // "This might e  it hrd"
console.log(removeABC("hello world!")); // null
console.log(removeABC("")); // null

module.exports = removeABC;
