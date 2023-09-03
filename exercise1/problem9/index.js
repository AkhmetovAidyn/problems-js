function isDisarium(num) {
  const numStr = num.toString();
  let sum = 0;

  for (let i = 0; i < numStr.length; i++) {
    const digit = parseInt(numStr[i]);
    sum += Math.pow(digit, i + 1);
  }

  return sum === num;
}

console.log(isDisarium(75)); // false
console.log(isDisarium(135)); // true
console.log(isDisarium(544)); // false
console.log(isDisarium(518)); // true
console.log(isDisarium(8)); // true
console.log(isDisarium(466)); // false

module.exports = isDisarium;
