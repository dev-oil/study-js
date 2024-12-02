// Spread 연산자, 전개구문
// 모든 Iterable은 Spread 될 수 있다.
// 순회가 가능한 모든 것들은 촤르를르륵 펼쳐 질 수 있다.
// func(...iterable)
// [...iterable]
// { ...obj }
// EcmaScript 2018

function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];

// console.log(add(nums[0], nums[1], nums[2]));
console.log(add(...nums)); // 6

// Rest parameters
function sum(first, second, ...nums) {
  console.log(nums);
}
sum(1, 2, 0, 1, 2, 4); // 0, 1, 2, 4

// Array concat
const fruits1 = ['🍎', '🍓'];
const fruits2 = ['🍊', '🍑'];
let arr = fruits1.concat(fruits2);
console.log(arr); // [ '🍎', '🍓', '🍊', '🍑' ]

arr = [...fruits1, '🍋', ...fruits2];
console.log(arr); // [ '🍎', '🍓', '🍋', '🍊', '🍑' ]

// Object
const sonny = { name: 'Son', age: 32, home: { address: 'home' } }; // object 내 object 는 shallow copy
const updated = {
  ...sonny,
  job: 'football player',
};
console.log(updated); // { name: 'Son', age: 32, home: { address: 'home' }, job: 'football player' }
console.log(sonny); // { name: 'Son', age: 32, home: { address: 'home' } }

// shallow copy 확인
updated.home.address = 'world class house';
console.log(sonny);

// MDN Spread
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
