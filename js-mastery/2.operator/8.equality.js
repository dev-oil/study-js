// 동등 비교 관계 연산자 (Equality Operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘 다 같음
// !== 값과 타입이 다름

console.log(2 == 2); // true
console.log(2 != 2); // false
console.log(2 != 3); // true
console.log(2 == 3); // false

console.log(2 == '2'); // true
console.log(2 === '2'); // false (이걸 씁시다)

console.log(true == 1); // true
console.log(true === 1); // false

console.log(false == 0); // true
console.log(false === 0); // false

console.clear();

const obj1 = {
  name: 'js',
};
const obj2 = {
  // 오브젝트 리터럴 {} 을 쓴다 ? > 새로운 오브젝트가 (새로운 주소값을 할당하여) 만들어진다
  name: 'js',
};

console.log(obj1 == obj2); // false
console.log(obj1 === obj2); // false
// 이유? : 오브젝트의 메모리 주소가 서로 다름

console.log(obj1.name == obj2.name); // true
console.log(obj1.name === obj2.name); // true
// 이유? : 내부 값 'js'는 동일하기 때문에

let obj3 = obj2;
console.log(obj3 == obj2); // true
console.log(obj3 === obj2); // true
// 이유? : 오브젝트2의 메모리 주소를 오브젝트3에 복사한 거기 때문에, 동일하다
