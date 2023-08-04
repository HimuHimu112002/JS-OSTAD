function main(input) {
    
    var [num1, num2] = input.split(" ").map(Number);
    var temp;
    console.log(`Before swapping: num1 = ${num1}, num2 = ${num2}`);
    temp = num1;
    num1 = num2;
    num2 = temp;
    console.log(`After swapping: num1 = ${num1}, num2 = ${num2}`);

}
main(10,20)