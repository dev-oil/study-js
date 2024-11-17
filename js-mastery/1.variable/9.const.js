// let 재할당이 가능
let a = 1;
a = 2;

// const 재할당이 불가능
// 1. 상수
// 2. 상수 변수 또는 변수
const text = 'hello';
// text = 'hi'; // error

// 1. 상수
// 상수를 만들 땐 항상 대문자로
const MAX_FRUITS = 5;

// 2. 재할당 불가능한 상수 변수 또는 변수

const apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};
console.log(apple);

// apple이라는 자체 object에 새로운 object는 할당할 순 없지만, object를 가지고 있는 주솟값 내의 값 변경은 가능하다
// apple = {}; // error
apple.name = 'orange';
console.log(apple);
