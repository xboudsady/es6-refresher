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

console.log(street, city); // Returns, 40 Main st. Boston



// CLASSES

// SUBCLASSES

// MODULES