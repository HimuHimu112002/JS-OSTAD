function main(input) {
    let x = (input*2) -input;
    if (input == 0) {
        console.log("This number is zero")
    } else if(x > 0) {
        console.log(`${input} is a positive number.`)
    }else{
        console.log(`${input} is a nagetive number.`)
    }
}
main()