// 사용예제 1
function sum(a, b) {
  console.log('function');
  return a + b;
}
const result = sum(1, 2);
console.log(result);

// 사용예제 2
function fullName(firstName, lastName) {
  return `${firstName} ${lastName} ✋`;
}
let lastName = '손';
let firstName = '흥민';
console.log(fullName(firstName, lastName));

let lastName2 = '김';
let firstName2 = '민재';
console.log(fullName(firstName2, lastName2));
