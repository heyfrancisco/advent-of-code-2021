const fs = require('fs');

const lines = fs
  .readFileSync('day01.txt', { encoding: 'utf-8' })
  .split('\n')
  .filter((x) => Boolean(x))
  .map((x) => parseInt(x));

console.log(lines);

let value = 0;

for (let i = 1; i < lines.length; i++) {
  const last = lines[i - 1];
  const current = lines[i];
  if (current > last) {
    value++;
  }
}

console.log(value);

let value2 = 0;

for (let i = 3; i < lines.length; i++) {
  const last = lines[i - 1] + lines[i - 2] + lines[i - 3];
  const current = lines[i] + lines[i - 1] + lines[i - 2];
  if (current > last) {
    value2++;
  }
}

console.log(value2);
