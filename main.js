// CONST & LET 
let name = 'John';
let test;

name = 'Jack';

const person = {
    name: 'John',
    age: 33
};

person.name = 'Jack';

const nums = [1, 2, 3, 4];
nums.push(5);



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



// FILTER  -- Use to return an array with things filter out, used mostly in redux, or take filter something hout
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
console.log(people2);


// SPREAD

// DESTRUCTURING

// CLASSES

// SUBCLASSES

// MODULES