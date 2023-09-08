function numOfDigits(num) {
  // Your code
  const numStr = Math.abs(num).toString();
  return numStr.length;
}



console.log(numOfDigits(1000)) // 4

console.log(numOfDigits(12)) // 2

console.log(numOfDigits(1305981031)) // 10

console.log(numOfDigits(0)) // 1

module.exports = numOfDigits;