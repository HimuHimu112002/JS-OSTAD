
let sum = 0;
const numbers = [30, 10, 5, 40, 60, 15];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < numbers[numbers.length / 2]) {
    sum += numbers[i];
  }
}
console.log(sum)

// array er vhitorer all small value sum 