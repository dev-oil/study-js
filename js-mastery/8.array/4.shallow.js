// 얕은 복사 Shallow Copy - 객체는 메모리 주소를 전달한다.
// 자바스크립트에서 복사 할때는 항상 얕은 복사가 이루어짐!
// Array.from, concat, slice, spread(...), Object.assign

// function (obj) {

// } // 인자로 전달된 오브젝트가 있다면, 함수 내부에서 오브젝트 수정은 절대 XXX

const pizza = { name: '🍕', price: 2, owner: { name: 'mario' } };
const ramen = { name: '🍜', price: 3 };
const sushi = { name: '🍣', price: 1 };

const store1 = [pizza, ramen];
const store2 = Array.from(store1);

console.log('store1', store1);
console.log('store2', store2);

store2.push(sushi);

console.log('store1', store1);
console.log('store2', store2);

pizza.price = 4;

console.log('store1', store1); // 둘다 바뀜
console.log('store2', store2); // 둘다 바뀜
