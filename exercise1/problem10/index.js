function move(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const index = alphabet.indexOf(char);

    if (index !== -1) {
      const nextIndex = (index + 1) % alphabet.length;
      result += alphabet[nextIndex];
    } else {
      result += char;
    }
  }

  return result;
}

console.log(move("hello")); // "ifmmp"
console.log(move("bye")); // "czf"
console.log(move("welcome")); // "xfmdpnf"

module.exports = move;
