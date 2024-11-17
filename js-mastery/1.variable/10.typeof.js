// typeof: 데이터 타입을 확인
// 값을 타입 문자열로 반환
let variable;
console.log(typeof variable); // undefined

variable = '';
console.log(typeof variable); // string

variable = 123; // ⬅️ 할당된 값에 따라 타입이 결정된다
console.log(typeof variable); // number

variable = {};
console.log(typeof variable); // object

variable = function () {};
console.log(typeof variable); // function

variable = Symbol();
console.log(typeof variable); // symbol

// 보통의 컴파일 언어들 ...
// Int variable = 0; 타입을 먼저 선언

// 그들과 다른 자바스크립트의 두가지 특징
// 1. 동적이다. (dynamic)
// 2. 하나의 변수가 할당된 값에 따라서 동적으로 타입이 변경된다. (Weakly type)
