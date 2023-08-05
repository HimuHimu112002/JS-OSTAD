function name(input) {

    let numArr = input.trim().split(/\s+/).map(Number);
    let x1 = numArr[0];
    let x2 = numArr[1];
    let y1 = numArr[2];
    
     let x = x1 + x2 + y1
     let c = x/3
     let r = c.toFixed(4)
     if(c === parseInt(c)){
        console.log(c)
      }else{
         console.log(r)
       }
}