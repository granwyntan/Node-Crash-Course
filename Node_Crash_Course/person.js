// Module Wrapper Function
/* (function (exports, require, module, __filename, __dirname){

})*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting(){
        console.log(`My Name is ${this.name} and I am ${this.age}`)
    }
}

const person = {
    name: "John Doe" ,
    age: 30
}

module.exports = person;
module.exports = Person;

// import Person from './person'; 
// ^ ES6
// //Common JS const Person = require('./person');

// var person1 = new Person("John Doe", 30);

// person1.greeting();