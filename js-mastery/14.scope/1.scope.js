// 코드 블럭: { }, if() { }, for() { }, function() { }
// 블럭 외부에서는 블럭 내부의 변수를 참조할 수 ❌

{
  const a = 'a';
  console.log(a);
}

// console.log(a); // 안되죠

const b = 'b';

// 함수 외부에서는 함수 내부의 변수를 참조할 수 ❌
function print() {
  const message = 'hello world';
  console.log(message);
}

print();

// console.log(message); // 안되죵?

// 함수 외부에서는 함수의 매개변수를 참조할 수 ❌
function sum(a, b) {
  console.log(a + b);
}

sum(1, 2);

// console.log(a, b); // 안돼!
