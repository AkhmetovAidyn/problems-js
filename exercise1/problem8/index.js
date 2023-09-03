function longestTime(h, m, s) {
  const totalSeconds = h * 3600 + m * 60 + s;
  const maxTimeInSeconds = Math.max(h * 3600, m * 60, s);
  if (maxTimeInSeconds === h * 3600) {
    return h;
  } else if (maxTimeInSeconds === m * 60) {
    return m;
  } else {
    return s;
  }
}

console.log(longestTime(1, 59, 3598)); // 1
console.log(longestTime(2, 300, 15000)); // 300
console.log(longestTime(15, 955, 59400)); // 59400



module.exports = longestTime;
