let a = 537
let b = a.toString()
if(b == '1300'){
    // remove last two index
    var resultString = b.slice(0, -2);
    let v = resultString.toString().split('').reverse().join('')
    console.log(v)
}else{
    console.log(a.toString().split('').reverse().join(''))
}


var inputString = "0031";
if (inputString.substring(0, 2) === "00") {
    // remove first two index
  var resultString = inputString.substring(2);
  console.log(resultString);
} else {
  console.log(inputString);
}










