// 자바스크립트의 함수는 만능 슈퍼맨~
// 함수처럼 사용, 생성자 함수로 사용 (클래스)
// 하지만, 이걸 위해서 불필요한 무거운 프로토타입(많은 데이터를 담고 있는 객체) 생성됨

// const dog = {
//   name: 'Dog',
//   play: function () {
//     // 💩 함수 내부에 자체적으로 더 무거운 프로토타입을 가지고 있게 됨...
//     console.log('논다멍');
//   },
// };

const dog = {
  name: 'Dog',
  play: () => {
    // 화살표 함수로 리팩토링 하면 생성자 함수로 사용할 수 없게 됨
    console.log('논다멍');
  },
};

dog.play(); // 논다멍

// const obj = new dog.play(); // 💩 생성자 함수처럼 사용이 가능해져버려
// console.log(obj); // 논다멍 play{}

// ES6
const cat = {
  name: 'cat',
  // 객체 안에서 함수 메서드로 정의
  play() {
    // 객체의 메서드 (오브젝트에 속한 함수)
    console.log('냐옹이다옹');
  },
};

cat.play();
// const obj1 = new cat.play(); // error: cat.play is not a constructor
// 생성자 함수로 사용 ❌

/**
 * 화살표 함수의 특징
 * 1. 문법이 깔끔함
 * 2. 생성자 함수로 사용이 불가능 (무거운 프로토타입을 만들지 ❌)
 * 3. 함수 자체 arguments (인자에 대해서 모든 정보를 가지고 있는 arguments) 도 가지고 있지 않음
 * 4. this에 대한 바인딩이 정적으로 결정됨
 *  - 함수에서 제일 근접한 상위 스코프의 this에 정적으로 바인딩 됨
 *
 */

function sum(a, b) {
  console.log(arguments);
}
sum(1, 2); // [Arguments] { '0': 1, '1': 2 }

const add = (a, b) => {
  console.log(arguments); // 함수의 arguments가 아니라 전역 객체의 arguments 출력
};
add(1, 2);

const printArrow = () => {
  console.log(this);
};

printArrow(); // {} module
cat.printArrow = printArrow;
cat.printArrow(); // 그대로 정적으로 결정된 {} module 출력
