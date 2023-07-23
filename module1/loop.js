let num1 = 1;
do{
    console.log("This is do while loop" + num1);
    num1++;
    
    // if(num1 === 5){
    //     continue
    // }
}while(num1<=10)

// ========================================
let num2 = 1;
while(num2<=10){
    console.log("This is while loop" + num2);
    num2++;
    // if(num2 == 2){
    //     continue
    // }
}

// =========================================
for (let i=1; i<=10; i++) {
    if(i == 5){
        continue
    }
    console.log("This is for loop" + i);
}