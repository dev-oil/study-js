// 동결! Object.freeze
// 새로운 프로퍼티 추가 X
// 삭제 X
// 쓰기 X
// 속성 재정의 X
// (단, 얕은 꽁꽁 얼림~ 얕은 레벨만 (다른 참조 레벨은 안얼어짐))
const sonny = { name: 'sonny' };
const dog = { name: '바둑이', emoji: '🐶', owner: sonny };

Object.freeze(dog); // 동결 시킴

dog.name = '멍멍이'; // 변경되지 않음
console.log(dog);

dog.age = 4;
console.log(dog);

delete dog.name;
console.log(dog);

sonny.name = '흥민';
console.log(dog);

console.clear();
// 밀봉! Object.seal
// 값의 수정 O
// 키 자체를 추가 하는것 X
// 키 삭제 X
// 속성 재정의 X
const cat = {};
Object.assign(cat, dog); // 객체 복사 == const cat = {...dog};

Object.seal(cat);
console.log(cat);

cat.name = '냐옹이다옹';
console.log(cat);

delete cat.emoji;

// 동결 또는 밀봉을 확인하는 방법
console.log(Object.isFrozen(dog)); // true
console.log(Object.isSealed(cat)); // true

// 확장 금지 preventExtensions
const tiger = { name: '어흥' };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger)); // false

// 수정 가능
tiger.name = '어흐응';
console.log(tiger);

// 삭제 가능
delete tiger.name;
console.log(tiger);

// 추가 불가
tiger.age = 1;
console.log(tiger);
