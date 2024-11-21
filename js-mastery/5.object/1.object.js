// Object literal { key: value }
// new Object();
// Object.create();
// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체 (함수)

let apple = {
  name: 'apple', // 문자 best
  'hello-bye': '🫡', // 문자열 ex helloBye 이렇게 만들죠.. 차라리... ㅎㅎ
  0: 1, // 숫자
  ['hello-bye1']: '🫡', // 대괄호
};

// 속성, 데이터에 접근하기 위해서는
apple.name; // 마침표 표기법 dot notation
// === apple['name'];
apple['hello-bye']; // 대괄호 표기법 bracket notation

// 속성 추가
apple.emoji = '🍎';
console.log(apple.emoji);
console.log(apple['emoji']); // 대괄호 표기법 사용시 항상 대괄호 안에는 string으로 전달

// 속성 삭제
delete apple.emoji;
console.log(apple);
