const data = input.split(" ");
const minute = Number(data[0]);
const fps = Number(data[1]);
const totalFrames= fps*60*minute;
console.log(totalFrames);
