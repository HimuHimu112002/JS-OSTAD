function main(input) {
    if ((0 == input % 4) && (0 != input % 100) || (0 == input % 400)) {
        console.log(input + ' is a leap year.');
    } else {
        console.log(input + ' is not a leap year.');
    }
}
main(2020)