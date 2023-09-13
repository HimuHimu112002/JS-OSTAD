let input = '123'
let b = input.split('').reverse().join('')

if (input === b) {
    console.log(`${b} is a palindrome number`)
}else{
    console.log(`${input} is not a palindrome number`)
}