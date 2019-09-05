const user = {
  name: 'André',
  age: 29,
  address: {
    city: 'Florianópolis',
    state: 'SC'
  }
}

const { name, age, address: { city } } = user;

console.log(name);
console.log(age);
console.log(city);

function showNameAndAge({ name, age }) {
  console.log(name, age);
}

showNameAndAge(user);