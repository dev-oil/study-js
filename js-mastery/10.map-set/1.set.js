// Set
const set = new Set([1, 2, 3]);
console.log(set); // Set(3) { 1, 2, 3 }

// size: 사이즈 확인
console.log(set.size); // 3

// has: 존재하는지 확인
console.log(set.has(2)); // true
console.log(set.has(6)); // false

// 순회 forEach 이용 가능. 즉, set은 이터러블 하다.
set.forEach((item) => console.log(item)); // 1 2 3

for (const value of set.values()) {
  console.log(value); // 1 2 3
}

// add: 추가
set.add(6);
console.log(set); // Set(4) { 1, 2, 3, 6 }
set.add(6);
console.log(set); // Set(4) { 1, 2, 3, 6 } // 중복 안됨~

// delete: 삭제
set.delete(6);
console.log(set); // Set(3) { 1, 2, 3 }

// clear: 전부 삭제
set.clear();
console.log(set); // Set(0) {}

// 오브젝트 세트
const obj1 = { name: '🍎', price: 8 };
const obj2 = { name: '🍌', price: 5 };
const objs = new Set([obj1, obj2]);
console.log(objs); // Set(2) { { name: '🍎', price: 8 }, { name: '🍌', price: 5 } }

// quiz
obj1.price = 10;
// objs.add(obj1);
console.log(objs); // Set(2) { { name: '🍎', price: 10 }, { name: '🍌', price: 5 } } shallow copy

// quiz
const obj3 = { name: '🍌', price: 5 }; // 새로운 오브젝트 리터럴로 만든 것이기 때문에 새로운 값을 가지고 있으니,,,! 추가가 되는 것이 당연~
objs.add(obj3);
console.log(objs); // Set(3) { { name: '🍎', price: 10 }, { name: '🍌', price: 5 }, { name: '🍌', price: 5 } }
obj3.price = 3;

console.log(objs);
