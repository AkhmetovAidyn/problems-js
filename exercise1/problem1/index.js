function numOfDigits(int) {
  // Your code
  return int.toString().length;
}



console.log(numOfDigits(1000)) // 4

console.log(numOfDigits(12)) // 2

console.log(numOfDigits(1305981031)) // 10

console.log(numOfDigits(0)) // 1

module.exports = numOfDigits;
