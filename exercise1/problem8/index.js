function longestTime(h, m, s) {
  if(h * 3600 > m * 60 && h * 3600 > s) {
    return h;
  } else if (m * 60 > h * 3600 && m * 60 > s) {
    return m;
  } else {
    return s
  }
}


console.log(longestTime(1, 59, 3598));  // 1
console.log(longestTime(2, 300, 15000));  // 300
console.log(longestTime(15, 955, 59400));  // 59400


module.exports = longestTime;