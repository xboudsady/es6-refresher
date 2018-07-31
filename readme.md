# ES6 Refresher

## CONST & LET

used in place of var.

**const** is used for block level scoping, when you want non mutable data

**let** will allow data to be mutale within scope

## ARROW FUNCTION

If code block is only one line, we can use arrow function to shorten the function length. e.g.

```javascript
const sayHello = name => console.log(`Hello ${name}`);
```

Instead of

```javascript
const sayHello = function(name {
    console.log(`Hello ${name}`);
});
```

## FOREACH

Used for looping through an array

```javascript
const fruits = ["Apples", "Oranges", "Grape"];

fruits.forEacch((fruit, index) => console.log(fruit));
```

## MAP

Similiar to forEach method, but can change each item of an array.
Example below removes 's' character,

```javascript
const fruits = ["Apples", "Oranges", "Grape"];
const singleFruit = fruits.map(fruit => fruit.slice(0, -1).toUpperCase);
```

## FILTER

Use to return an array with things filter out, used mostly in redux, or take filter something out.

We use filter alot in react because your state is immutable, you can't directly change it.

We want to return an array tha removes "Bob", creating a new array without bob,

```javascript
const people = [
  {
    id: 1,
    name: "Karen"
  },
  {
    id: 2,
    name: "Bob"
  },
  {
    id: 3,
    name: "Sharon"
  }
];

const people2 = people.filter(person => person.id !== 2);
```

## SPREAD

Allows us to spread values out whether they are arrays element or object properties. Really useful in react, since since is immutable, so we use spread to make a copy and add new data to the copy

```javascript
const arr = [1, 2, 3];
const arr2 = [...arr, 4]; // Make a copy of this array and add a 4 to it
const arr3 = [...arr.filter(num => num !== 2), 4]; // We can combien with filter method, to remove 2 first
const person1 = {
  name: "Brad",
  age: 36
};

const newPerson2 = {
  // We can do the same with objects
  ...person1,
  email: "brad@gmail.com"
};
```

## DESTRUCTURING

Used alot in react. We can pull value out of objects and array

```javascript
const profile = {
  name: "John Doe",
  address: {
    street: "40 Main st",
    city: "Boston"
  },
  hobbies: ["movies", "music"]
};

const { name, address, hobbies } = profile; // Pullin the 'name', 'address' object, 'hobbies' array out of the profile object

const { street, city } = profile.address;

console.log(street, city); // Returns, 40 Main st. Boston
```
