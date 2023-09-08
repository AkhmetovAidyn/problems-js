function arrayOfMultiples(num, length) {
  // Your code
  let arr = [];
  for (var i = 1; i <= length; i++) {
      arr.push(num * i);
  }
  return arr;
}

console.log(arrayOfMultiples(7, 5)); // Выводит [7, 14, 21, 28, 35]
console.log(arrayOfMultiples(12, 10)); // Выводит [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
console.log(arrayOfMultiples(17, 6)); 

module.exports = arrayOfMultiples;
