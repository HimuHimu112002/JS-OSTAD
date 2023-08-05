function lrg(params) {
    
    let numArr = input.trim().split(/\s+/).map(Number);
        let x1 = numArr[0];
        let x2 = numArr[1];
        let y1 = numArr[2];
    
        if(x1 > x2 && x1 > y1){
            console.log(x1)
        }else if(x2 > x1 && x2> y1){
            console.log(x2)
        }else{
            console.log(y1)
        }

}
lrg()