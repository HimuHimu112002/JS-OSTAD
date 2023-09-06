function findNextNumber(num1, num2, num3) {
    // let numArr = input.trim().split(/\s+/).map(Number);
    // let x1 = numArr[0];
    // let x2 = numArr[1];
    // let x3 = numArr[2];
    const maxNumber = Math.max(num1, num2, num3);
    const nextNumber = maxNumber + 2;
    //console.log(nextNumber);
    return nextNumber;

}

// Example usage:
const num1 = 3;
const num2 = 5;
const num3 = 7;

const nextNumber = findNextNumber(num1, num2, num3);
console.log(`The next number is: ${nextNumber}`);
  
  
  
  
  