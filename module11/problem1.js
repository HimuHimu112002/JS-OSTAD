// let a = [14,2,3,4,5,6]
// console.log(Math.max(...a))

// const numbers = [3, 9, 1, 25, 4, 12];
// let max = numbers[0];
// for (const number of numbers) {
//     if (number > max) {
//         max = number;
//     }
// }
// console.log(max);

// const numbers1 = [3, 9, 1, 25, 4, 120];
// const max1 = numbers1.reduce((acc, current) => Math.max(acc, current));
// console.log(max1);

const data = input.split(" ");
const m = Number(data[0]);
const v = Number(data[1]);
const kineticEnergy = 0.5*m*v*v;
console.log(parseInt(kineticEnergy));