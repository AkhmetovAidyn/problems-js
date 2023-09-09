function duplicateNums(nums) {
  // Your code
  const count = {};
  const result = [];

  for (const num of nums) {
    if (count[num]) {
      count[num]++;
    } else {
      count[num] = 1;
    }
  }

  for (const num in count) {
    if (count[num] > 1) {
      result.push(parseInt(num));
    }
  }

  return result.sort((a, b) => a - b);
}

console.log(duplicateNums([1, 2, 3, 4, 3, 5, 6])); // [3]
console.log(duplicateNums([81, 72, 43, 72, 81, 99, 99, 100, 12, 54])); // [72, 81, 99]
console.log(duplicateNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // []


module.exports = duplicateNums;
