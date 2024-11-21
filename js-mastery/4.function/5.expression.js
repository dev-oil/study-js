// 함수 선언문 function name() { }
// 함수 표현식 const name = function () { }
// > 표현식 가능 한 이유 ? 함수도 객체이기 때문에 (주소값 할당)
let add = function (a, b) {
  return a + b;
};

console.log(add(1, 2));

// 화살표 함수 const name = () => { }
add = (a, b) => {
  return a + b;
};

console.log(add(1, 2));

// 한번 더 생략
add = (a, b) => a + b;

// 생성자 함수 const object = new Function(); // 뒤 객체편에서 다룸 > 5.object 5.create.js 참고

// IIFE (Immediately-Invoked Function Expressions) 즉시 실행 함수
(function run() {
  console.log('🏃');
})(); // 많이 사용되진 않음
