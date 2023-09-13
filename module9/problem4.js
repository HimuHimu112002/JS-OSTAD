//const size = 6;

// for (let i = 0; i < numbers.length; i++) {
    //   //const num = parseInt(prompt(`সংখ্যা ${i + 1} দিন:`));
    //   //numbers.push(num);
    // }
    
let sum = 0;
const numbers = [30, 10, 5, 40, 60, 15];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < numbers[numbers.length / 2]) {
    sum += numbers[i];
  }
}
console.log(sum)