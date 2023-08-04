function main(input) {
    
    let numArr = input.trim().split(/\s+/).map(Number);
    let x1 = numArr[0];
    let y1 = numArr[1];
    let x2 = numArr[2];
    let y2 = numArr[3];
    const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    console.log(`Distance: ${distance.toFixed(2)}`);
    
}
main("0","0","2","2")