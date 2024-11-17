// 증가 & 감소 연산자 Increment & Decrement Operators
// 증가
let a = 0;
console.log(a);
a++; // a = a + 1;
console.log(a);

// 감소
a--; // a = a - 1;
console.log(a);

// 주의!
// a++ 필요한 연산을 하고, 그 뒤 값을 증가시킴
// ++a 값을 먼저 증가하고, 필요한 연산을 함
// (마이너스도 동일)

a = 0;

// console.log(a++); // 0
// console.log(a); // 1

let b = a++; // 만약 b에 증가한 값을 넣고싶다면 ++a로 작업
console.log(b); // 0 ㄷㄷ
console.log(a); // 1
