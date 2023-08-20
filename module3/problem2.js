function lrg(x1,x2,y1) {
    
    let numArr = input.trim().split(/\s+/).map(Number);
        let x1 = numArr[0];
        let x2 = numArr[1];
        let x3 = numArr[2];
    
        if(x1 > x2 && x1 > x3){
            console.log(x1)
        }else if(x2 > x1 && x2> x3){
            console.log(x2)
        }else{
            console.log(x3)
        }

}
lrg(10,20,30)