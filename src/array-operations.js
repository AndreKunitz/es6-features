const arr = [1, 3, 4, 5, 6, 8];

const newArr = arr.map((item, index) => item + index);
console.log(newArr);

const add = arr.reduce((total, next) => total + next);
console.log(add);

const filter = arr.filter(item => item % 2 === 0);
console.log(filter);

const find = arr.find(item => item === 4);
console.log(find);

const object = () => ({ name: 'André' });
console.log(object());