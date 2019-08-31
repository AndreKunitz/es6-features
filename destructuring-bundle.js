"use strict";

var user = {
  name: 'André',
  age: 29,
  address: {
    city: 'Florianópolis',
    state: 'SC'
  }
};
var name = user.name,
    age = user.age,
    city = user.address.city;
console.log(name);
console.log(age);
console.log(city);

function showNameAndAge(_ref) {
  var name = _ref.name,
      age = _ref.age;
  console.log(name, age);
}

showNameAndAge(user);
