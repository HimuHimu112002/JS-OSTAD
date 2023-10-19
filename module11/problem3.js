const data = input.split(" ");
const prob = Number(data[0]);
const prize = Number(data[1]);
const pay = Number(data[2]);
console.log(prob * prize > pay);