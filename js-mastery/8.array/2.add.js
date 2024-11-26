const fruits = ['🍌', '🍎', '🍇', '🍑'];

// 배열 아이템을 참조하는 방법
console.log(fruits[0]); // 🍌
console.log(fruits[1]); // 🍎
console.log(fruits[2]); // 🍇
console.log(fruits[3]); // 🍑

console.log(fruits.length); // 4

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 추가, 삭제 - 좋지 않은 방식 💩
// const fruits = ['🍌', '🍎', '🍇', '🍑'];

// 추가 : index number로 추가하는 방식
// 비어있는 값을 만들수도, 원래 값을 덮어 쓸 수도 있으니 안 됨
fruits[4] = '🍓';
console.log(fruits); // [ '🍌', '🍎', '🍇', '🍑', '🍓' ];

// 삭제 : index number로 삭제하는 방식
// 삭제 후 빈 영역이 남아버린다. . .
delete fruits[1];
console.log(fruits); // [ '🍌', <1 empty item>, '🍇', '🍑', '🍓' ]
