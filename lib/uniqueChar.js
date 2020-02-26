const uniqueChar = str => {
  if (!str) return;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let isUnique = true;

    for (let j = 0; j < str.length; j++) {
      if (char === str[j] && i !== j) {
        isUnique = false;
      }
    }
    if (isUnique) return char;
  }
};

module.exports = uniqueChar;
