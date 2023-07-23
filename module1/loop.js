let num1 = 0;
do{
    num1++;
    if(num1 === 2){
        //break
        continue
    }
    console.log("This is do while loop" + num1);
}while(num1<=10)

// ========================================
let num2 = 0;
while(num2<=10){
    num2++;
    if(num2 === 2){
        //break
        continue
    }
    //console.log("This is while loop" + num2);
}

// =========================================
for (let i=1; i<=10; i++) {
    if(i == 5){
        continue
    }
    //console.log("This is for loop" + i);
}