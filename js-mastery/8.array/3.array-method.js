// 배열의 함수들
// point! 배열 자체를 변경하는지, 새로운 배열을 반환하는지

/****************** 배열 자체를 변경하는 함수들 ******************/
const fruits = ['🍌', '🍎', '🍑'];

// isArray: 특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits)); // true // class 이름을 사용하면 static 메서드
console.log(Array.isArray({})); // false

// indexOf: 특정한 아이템의 위치를 찾을 때
console.log(fruits.indexOf('🍎')); // 1

// includes: 배열안에 특정한 아이템이 있는지 체크
console.log(fruits.includes('🍎')); // true

// 추가 - push: 제일 뒤
let length = fruits.push('🍋'); // 배열 자체를 수정(업데이트)

console.log(fruits); // [ '🍌', '🍎', '🍑', '🍋' ]
console.log(length); // 4

// 추가 - unshift: 제일 앞
length = fruits.unshift('🍓'); // 배열 자체를 수정(업데이트)
console.log(fruits); // [ '🍓', '🍌', '🍎', '🍑', '🍋' ]
console.log(length); // 5

// 제거 - pop: 제일 뒤
let lastItem = fruits.pop(); // 배열 자체를 수정(업데이트)하고, 제거한 요소를 반환
console.log(fruits); // [ '🍓', '🍌', '🍎', '🍑' ]
console.log(lastItem); // 🍋

// 제거 - shift: 제일 앞
lastItem = fruits.shift(); // 배열 자체를 수정(업데이트)하고, 제거한 요소를 반환
console.log(fruits); // [ '🍌', '🍎', '🍑' ]
console.log(lastItem); // 🍓

// splice: 중간에 추가 또는 삭제 가능
// 제거
const deleted = fruits.splice(1, 1); // 배열 자체를 수정(업데이트)하고, 제거한 요소를 반환
console.log(fruits); // [ '🍌', '🍑' ]
console.log(deleted); // [ '🍎' ] - 배열형태로 반환

// 삭제 + 추가
fruits.splice(1, 0, '🍊', '🍐');
console.log(fruits); // [ '🍌', '🍊', '🍐', '🍑' ]

fruits.splice(1, 1, '🍇', '🍒');
console.log(fruits); // [ '🍌', '🍇', '🍒', '🍐', '🍑' ]

/****************** 잘라진 새로운 배열을 만드는 함수들 ******************/
// slice: 잘라서 새로운 배열 만들기
let newArr = fruits.slice(0, 2);
console.log(fruits); // [ '🍌', '🍇', '🍒', '🍐', '🍑' ]
console.log(newArr); // [ '🍌', '🍇' ]

// 아무것도 전달하지 않으면,, 배열 전체가 반환
newArr = fruits.slice(-2); // slice(1) 앞에 1부터 뒤 전체 반환 / slice(-2) 뒤에서 2번째부터 전체 반환
console.log(newArr); // [ '🍌', '🍇', '🍒', '🍐', '🍑' ]

// concat: 여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);

console.log(arr1); // [ 1, 2, 3 ]
console.log(arr2); // [ 4, 5, 6 ]
console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ]

// reverse: 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4); // [ 6, 5, 4, 3, 2, 1 ]

// 중첩 배열을 하나의 배열로 쫙 펴기
// flat은 기본 1단계 까지만 풀어줌
// 단계 지정 가능
let arr = [
  [1, 2, 3],
  [4, [5, 6, [3, 4]]],
];
console.log(arr); // [ [ 1, 2, 3 ], [ 4, [ 5, 6 ] ] ]
console.log(arr.flat()); // [ 1, 2, 3, 4, [ 5, 6 ] ]
console.log(arr.flat(3)); // [ 1, 2, 3, 4, 5, 6, 3, 4 ]

arr = arr.flat(3);

/******** fill은 배열 자체를 수정 ********/
// fill: 특정한 값으로 배열을 채우기
arr.fill(0);
console.log(arr); // [ 0, 0, 0, 0, 0, 0, 0, 0 ]

arr.fill('🫛', 1, 3);
console.log(arr); // [ 0, '🫛', '🫛', 0, 0, 0, 0, 0 ]

arr.fill('🫛', 1);
console.log(arr); // [ 0, '🫛', '🫛', '🫛', '🫛', '🫛', '🫛', '🫛']

/******** join이는 문자열로 만들어버림 ********/
// 배열을 문자열로 합하기
let text = arr.join();
console.log(text); // 0,🫛,🫛,🫛,🫛,🫛,🫛,🫛

text = arr.join('|'); // 0|🫛|🫛|🫛|🫛|🫛|🫛|🫛
console.log(text);
