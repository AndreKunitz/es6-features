// REST OPERATOR

const user = {
  name: 'André',
  age: 29,
  company: 'MyCompany'
}

const { name, ...rest } = user;

console.log(name);
console.log(rest);

// REST OPERATOR IN ARRAYS

const arr = [1, 2, 3, 4, 5];

const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

// REST OPERATOR IN FUNCTIONS

function add(...params) {
  return params.reduce((total, next) => total + next);
}

console.log(add(1, 2, 3));

// SPREAD OPERATOR IN ARRAYS

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

// SPREAD OPERATOR IN OBJECTS

const user2 = { ...user, name: 'Jesus' };
console.log(user2);