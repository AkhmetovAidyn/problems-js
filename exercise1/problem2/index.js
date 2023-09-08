function intWithinBounds(n, lower, upper) {
  // Your code
  if (Number.isInteger(n) && n >= lower && n < upper) {
    return true;
  } else {
    return false;
  }
}

console.log(intWithinBounds(3, 1, 9)) // true

console.log(intWithinBounds(6, 1, 6)) // false

console.log(intWithinBounds(4.5, 3, 8)) // false

module.exports = intWithinBounds;