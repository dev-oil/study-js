const map = new Map([
  ['key1', '🍎'],
  ['key2', '🍌'],
]);

console.log(map); // Map(2) { 'key1' => '🍎', 'key2' => '🍌' }

// size: 사이즈 확인
console.log(map.size); // 2

// has: 존재하는지 확인
console.log(map.has('key1')); // true
console.log(map.has('key6')); // false

// forEach: 순회
map.forEach((value, key) => console.log(key, value)); // key1 🍎 key2 🍌
console.log(map.keys()); // [Map Iterator] { 'key1', 'key2' }
console.log(map.values()); // [Map Iterator] { '🍎', '🍌' }
console.log(map.entries()); // [Map Entries] { [ 'key1', '🍎' ], [ 'key2', '🍌' ] }

// --- map 은 무조건 key를 이용해서 추가하고 찾고 삭제하고 .. 업무를 함
// get: 찾기
console.log(map.get('key1')); // 🍎
console.log(map.get('key2')); // 🍌
console.log(map.get('key4')); // undefined

// set: 추가
map.set('key3', '🥝');
console.log(map); // Map(3) { 'key1' => '🍎', 'key2' => '🍌', 'key3' => '🥝' }

// 삭제
map.delete('key3');
console.log(map); // Map(2) { 'key1' => '🍎', 'key2' => '🍌' }

// 전부삭제
map.clear();
console.log(map); // Map(0) {}

// 오브젝트와의 큰 차이점?????
// 1. 사용할 수 있는 함수가 다르다 (map이 더 많으심)
// object
const key = { name: 'milk', price: 10 };
const milk = { name: 'milk', price: 10, description: '멸균 우유' };

const obj = {
  [key]: milk,
};

console.log(obj); // {'[object Object]': { name: 'milk', price: 10, description: '멸균 우유' }}

// map
const map2 = new Map([[key, milk]]);
console.log(map2); // Map(1) { { name: 'milk', price: 10 } => { name: 'milk', price: 10, description: '멸균 우유' } }

// 맵은 obj[key]로 접근이 불가함
console.log(obj[key]); // { name: 'milk', price: 10, description: '멸균 우유' }
console.log(map2[key]); // undefined
console.log(map2.get(key)); // { name: 'milk', price: 10, description: '멸균 우유' }
