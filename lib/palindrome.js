function palindrome(str) {
  str = str
    .toLowerCase()
    .split(" ")
    .join("");

  console.log(str, str.length);
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
}

module.exports = palindrome;
