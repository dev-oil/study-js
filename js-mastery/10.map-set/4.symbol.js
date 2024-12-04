// Symbol 심벌
// 유일한 키를 생성할 수 있음
const map = new Map();
// const key1 = 'key';
// const key2 = 'key';

const key1 = Symbol('key');
const key2 = Symbol('key');

map.set(key1, 'Hello');
console.log(map.get(key2)); // 일반 const 로 선언한 변수에서는 hello가 ㄷㄷ Symbol은 undefined
console.log(key1 === key2); // 일반 변수 true / Symbol false

// 동일한 이름으로 하나의 키를 사용하고 싶다면, Symbol.for
// 전역 심벌 레지스트리 (Global Symbol Registry)
// 동일한 symbol
const k1 = Symbol.for('key');
const k2 = Symbol.for('key');
console.log(k1 === k2); // true

console.log(Symbol.keyFor(k1)); // key
console.log(Symbol.keyFor(key1)); // undefined
// 일반 심볼은 문자열에 대한 정보가 숨겨져 있고, 레지스트리로 만든 것만 가져올 수 있음

const obj = { [k1]: 'Hello', [Symbol('key')]: 1 };
console.log(obj); // { [Symbol(key)]: 'Hello', [Symbol(key)]: 1 }
console.log(obj[k1]); // hello
console.log(obj[Symbol('key')]); // undefined

// 문자열이 똑같아도, 유니크한 키값을 만들고 싶다면 심볼을 사용하면된다.
// 문자열에 대해 동일한 심볼을 사용하고 싶다면, Symbol.for 사용
