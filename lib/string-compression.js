function comp(str) {
  let newStr = "";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count++;
    if (str[i] !== str[i + 1]) {
      newStr += str[i] + count;
      count = 0;
    }
  }
  console.log(newStr);
}
module.exports = comp;
