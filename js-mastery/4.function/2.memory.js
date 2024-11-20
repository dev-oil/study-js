// 함수도 객체다
// 함수도 참조한다
function add(a, b) {
  return a + b;
}

// 이름을 할당하는 것은 즉 메모리 주소를 할당하는 것
const sum = add;

console.log(sum(1, 2));
console.log(add(1, 2));
