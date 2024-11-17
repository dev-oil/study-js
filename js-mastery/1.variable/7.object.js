let name = 'apple';
let color = 'red';
let display = '🍎';
let orangeName = 'orange';

// 연관된 데이터를 한 덩어리로 그룹화(패키지화) 할 수 있는 것이 바로 객체
let apple = {
  name: 'apple',
  color: 'red',
  display: '🍎',
};

console.log(apple); // { name: 'apple', color: 'red', display: '🍎' }
console.log(apple.name); // apple

let orange = {
  name: '오렌지',
  color: 'orange',
  display: '🍊',
};

console.log(orange); // { name: '오렌지', color: 'orange', display: '🍊' }
