function sortIt(array) {
  return array.sort((a, b) => {
    if (Array.isArray(a) && Array.isArray(b)) {
      return a[0] - b[0]; 
    } else if (Array.isArray(a)) {
      return a[0] - b;
    } else if (Array.isArray(b)) {
      return a - b[0];
    } else {
      return a - b; 
    }
  });
}

console.log(sortIt([4, 1, 3])); // [1, 3, 4]
console.log(sortIt([[4], [1], [3]])); // [[1], [3], [4]]
console.log(sortIt([4, [1], 3])); // [[1], 3, 4]
console.log(sortIt([[4], 1, [3]])); // [1, [3], [4]]
console.log(sortIt([[3], 4, [2], [5], 1, 6])); // [1, [2], [3], 4, [5], 6]

module.exports = sortIt;
