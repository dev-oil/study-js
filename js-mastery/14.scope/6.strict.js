// 엄격 모드 strict mode
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
// 리액트와 같은 프레임워크 사용 시 기본적으로 엄격 모드임
'use strict';

// var x = 1;
// delete x; // delete 사용 불가.

function add(x) {
  var a = 2;
  // b = a + x; // 존재하지 않는 변수 사용 불가 (선언 키워드 생략 불가)
  console.log(this); // 엄격 모드에서 undefined / 일반 모드는? Object [global]
}
add(1);

const array = [1, 2, 3];
for (const num of array) {
  // strict 모드에서 num of array 로 사용 불가
  console.log(num);
}
