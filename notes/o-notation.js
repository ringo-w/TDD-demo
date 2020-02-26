// O(1)
let arr = [1, 2, 3, 4, 5];
console.log(arr[0]);

// O(n)
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// O(n^2)
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    console.log(arr[j]);
  }
}

// O(n^n)
uselessLoop = (n, count) => {
  if (count === 0) return;
  for (let i = 0; i < n; i++) {
    uselessLoop(n, count - 1);
  }
};
// O(n!)
factorial = num => {
  let value = 1;
  for (let i = 2; i <= num; i++) {
    value = value * i;
  }
  return value;
};
