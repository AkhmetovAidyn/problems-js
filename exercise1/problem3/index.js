function pentagonal(n) {
  // Your code
  if (n <= 0) {
    return 0;
  }
  return 1 + (5 * (n - 1) * (n - 2)) / 2;
}

module.exports = pentagonal;


console.log(pentagonal(1)) // 1

console.log(pentagonal(2)) // 6

console.log(pentagonal(3)) // 16

console.log(pentagonal(8)) // 141