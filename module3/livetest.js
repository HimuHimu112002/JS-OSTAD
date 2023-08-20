//======== 3
function sumArray() {
    let sum = 0;
    for(let first of arguments){
        sum += first
    }
   return sum;
}
//console.log(sumArray(1, 2, 100));

//  ============================== 4
class Person {
    constructor(name,age,occupation){
        this.name = name;
        this.age = age;
        this.occupation = occupation
       
    }
    getName() {
        return (`{name: ${this.name}, age: ${this.age}, occupation:${this.occupation}}`)
    }

}
const person1 = new Person("John", 30, "Engineer");
//console.log(person1.getName());


// =============== 5
let getEvenNumbers = (arr) => {
    for (num of arr){	
        if (num % 2 === 0) {
            //console.log(num)
        }
    }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = getEvenNumbers(numbers);

// =================== 7
class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
   
}
  
const rectangle = new Rectangle(4,5);
const area = rectangle.calculateArea();
//console.log(`Rectangle Area: ${area}`);


//  constructor =============================
// class Person {
//     constructor() {
//         console.log('I am a constructor')
//     }
// }
// const person3 = new Person();
// console.log(person3)


// static =========================
// class Person {

//     static first_name='Jhon'
//     static last_name='Dee'

//     static getName() {
//         return (`The name of the person is ${this.first_name} ${this.last_name}`)
//     }

// }

// console.log(Person.getName());




// inheritance ---- -----------------------1
// class Father {

//      first_name='Jhon'
//      last_name='Dee'
    
//      getName() {
//         return (`The name of the person is ${this.first_name} ${this.last_name}`)
//     }

// }

// class Son extends Father{

// }
// const SonObj1 = new Son();
// console.log(SonObj1.getName());




// inheritance ---- -----------------------------------2
// class Father {
//      first_name='Jhon'
//      last_name='Dee'
//      getName() {
//         return (`The name of the person is ${this.first_name} ${this.last_name}`)
//     }

// }
// class Son extends Father{
//     first_name='Jhon Junior'
// }
// const SonObj2 = new Son();
// console.log(SonObj2.getName());




// polymorphysim ======================================

// class firstClass {
//     add() {
//         console.log("First Method")
//     }
// }
// class secondClass extends firstClass {
//     add() {
//         console.log(30 + 40);
//     }
// }
// class thirdClass extends secondClass {
//     add() {
//         console.log("Last Method")
//     }
// }
// let ob = new firstClass();
// let ob2 = new secondClass();
// let ob3 = new thirdClass();
// ob.add();
// ob2.add();
// ob3.add();


//Abstraction ===================================
// class firstClass {
//     add() {
//         console.log("First Method")
//     }
// }
// class secondClass extends firstClass {
//     add() {
//         console.log(30 + 40);
//     }
// }
// class thirdClass extends secondClass {
//     add() {
//         console.log("Last Method")
//     }
// }
// let ob11 = new firstClass();
// let ob22 = new secondClass();
// let ob33 = new thirdClass();
// ob11.add();
// ob22.add();
// ob33.add();

function add(arry) {
    let lastElement = arry[arry.length - 1];
    var first = arry[0];
    let [a, b] = [first, lastElement]
    return [a,b]
}
console.log(add([1,2,3,4,5]))