// CONST & LET 
// let name = 'John';
// let test;

// name = 'Jack';

// const person = {
//     name: 'John',
//     age: 33
// };

// person.name = 'Jack';

// const nums = [1, 2, 3, 4];
// nums.push(5);



// ARROW FUNCTIONS

// function sayHello() {
//     console.log('Hello');
// }

const sayHello = name => console.log(`Hello ${name}`);



const fruits = ['Apples', 'Oranges', 'Grapes'];

// FOREACH  -- Used for lopping through an array, 

// fruits.forEach((fruit, index) => console.log(fruit));


// MAP  -- Simliar to forEach(), but changes each item in array if you want

const singleFruit = fruits.map((fruit) => fruit.slice(0, -1).toUpperCase()); // Takes of the last character for each one, the 's'

// console.log(singleFruit);



// FILTER  -- Use to return an array with things filter out, used mostly in redux, or take filter something out
// We use filter alot in react because your state is immutable, you can't directly change it
const people = [{
    id: 1,
    name: 'Karen'
}, {
    id: 2,
    name: 'Bob'
}, {
    id: 3,
    name: 'Sharon'
}];

// We want to return an array tha removes "Bob", creating a new array without bob, 
const people2 = people.filter(person => person.id !== 2); // This is an arrow function
// console.log(people2);




// SPREAD
// Allows us to spread values out whether they are arrays element or object properties. Really useful in react, since since is immutable, so we use spread to make a copy and add new data to the copy

const arr = [1, 2, 3];
const arr2 = [...arr, 4]; // Make a copy of this array and add a 4 to it
const arr3 = [...arr.filter(num => num !== 2), 4]; // We can combien with filter method, to remove 2 first
const person1 = {
    name: 'Brad',
    age: 36
};


const newPerson2 = { // We can do the same with objects
    ...person1,
    email: 'brad@gmail.com'
};






// DESTRUCTURING
// Used alot in react. We can pull value out of objects and array

const profile = {
    name: 'John Doe',
    address: {
        street: '40 Main st',
        city: 'Boston'
    },
    hobbies: ['movies', 'music']
}

const {
    name,
    address,
    hobbies
} = profile; // Pullin the 'name', 'address' object, 'hobbies' array out of the profile object

const {
    street,
    city
} = profile.address

// console.log(street, city); // Returns, 40 Main st. Boston



// CLASSES
// In react you have 2 types of components. Functional components, and class based components. Class base components are alot more common, because that's where you can have state. Theyt are just an ES6 class.

class Person {
    constructor(name, age) { // Use constructor method to create properties
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age}`;
    }
}

const person2 = new Person('John', 33);
const person3 = new Person('Sarah', 28);

console.log(person3.greet());



// SUBCLASSES
// We can extends to another class, to create a sublcass. This is common in React as react components, you'll need to be able to exetnds the core react component class. e.g. React.Components, this include alot of different methods that are called lifecyle method you can work with.

class Customer extends Person {
    constructor(name, age, balance) {
        super(name, age); // Inherits its parent class properties,from extends Person above
        this.balance = balance; // Addes a new properties
    }

    info() {
        return `${this.name} owes ${this.balance}.00`;
    }
}

const customer1 = new Customer('Kevin', 32, 300);

console.log(customer1.info());




// MODULES
// Use with webpack to bundle our modules. Modules allow us to break our code into mulitple files to modularize them

// file 1 (file1.js)
export const name = 'Jeff';
export const nums = [1, 2, 3];
export default Person; // If we want to export a class from this file

// file 2 (file2.js)
import {
    name,
    nums
} from './file1';

import Person from './file1'; // Importing a class from file1