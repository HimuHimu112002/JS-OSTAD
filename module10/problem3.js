// function findGCD(number1, number2) {
//     while (number2 !== 0) {
//         let temp = number2;
//         number2 = number1 % number2;
//         console.log(number2)
//         number1 = temp;
//     }
//     return number1;
// }

// let num1 = 9;
// let num2 = 12;
// let gcd = findGCD(num1, num2);
// console.log(`The GCD of ${num1} and ${num2} is ${gcd}`);

let numArr = input.trim().split(/\s+/).map(Number);
let x1 = numArr[0];
let x2 = numArr[1];
while (x2 !== 0) {
    let temp = x2;
    x2 = x1 % x2;
    x1 = temp;
}
console.log(x1)






