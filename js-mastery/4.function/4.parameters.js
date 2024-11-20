// 매개변수의 기본 값은 무조건 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
// 매개변수 기본값 Default Parameters ex. a = 1 (undefined 경우에만 사용됨 다른 인자 전달 시 무시)
function add(a = 1, b = 1) {
  // undefined 전에 기본 값을 전달 할 수 있다
  console.log(a); // 아무것도 없을 시 undefined
  console.log(b); // 아무것도 없을 시 undefined
  console.log(arguments);
  console.log(arguments[0]); // a 출력

  return a + b;
}

add(1, 2, 3);

// Rest 매개변수 Rest Parameters
function sum(a, b, ...numbers) {
  // 몇개의 인자를 받을 지 모를 때 배열로 받아서 사용 가능

  console.log(a);
  console.log(b);
  console.log(numbers);
}

sum(1, 2, 3, 4, 5, 6, 7);
