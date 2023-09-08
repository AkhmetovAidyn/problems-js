function longestTime(h, m, s) {
  if(h * 3600 > m * 60 && h * 3600 > s) {
    return h;
  } else if (m * 60 > h * 3600 && m * 60 > s) {
    return m;
  } else {
    return s
  }
}

module.exports = longestTime;
