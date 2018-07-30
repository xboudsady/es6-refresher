# ES6 Refresher

## CONST & LET

used in place of var.

**const** is used for block level scoping, when you want non mutable data

**let** will allow data to be mutale within scope

---

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

---

## FOREACH

Used for looping through an array

```javascript
const fruits = ["Apples", "Oranges", "Grape"];

fruits.forEacch((fruit, index) => console.log(fruit));
```

---

## MAP

Similiar to forEach method, but can change each item of an array.
Example below removes 's' character,

```javascript
const fruits = ["Apples", "Oranges", "Grape"];
const singleFruit = fruits.map(fruit => fruit.slice(0, -1).toUpperCase);
```

---

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
