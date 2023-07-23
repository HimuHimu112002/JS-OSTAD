function convert(input) {
    let x = (input * 9/5) + 32
    return x.toFixed(2)
};
let result = convert(32);
console.log("The temperature in Fahrenheit is: "+ result)