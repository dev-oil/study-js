const dog = { name: '바둑이', emoji: '🐶' };

console.log(Object.keys(dog)); // object 내 스태틱 함수 keys를 쓰면 key 만 전달해줌 // [ 'name', 'emoji' ]
console.log(Object.values(dog)); // 값에 대해서만 // [ '바둑이', '🐶' ]
console.log(Object.entries(dog)); // 키-값 쌍을 받고 싶다면 // [ [ 'name', '바둑이' ], [ 'emoji', '🐶' ] ]

console.log('name' in dog); // 'name'이라는 key 가 있는지 확인하는 방법 // true
console.log(dog.hasOwnProperty('name')); // true

// 오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨
// 모두 받아오기
const descriptors = Object.getOwnPropertyDescriptors(dog);

console.log(descriptors);

// 하나만 받아오기
const desc = Object.getOwnPropertyDescriptor(dog, 'name');
console.log(desc);

// object 프로퍼티 디스크립터는 차후 수정이 가능함
Object.defineProperty(dog, 'name', {
  value: '멍돌이',
  writable: false, // 값 업데이트 가능한지
  enumerable: false, // 열거 가능하게 할 건지
  configurable: false, // 키 삭제가 가능한지
});

console.log(dog.name);
console.log(Object.keys(dog)); // 이름이라는 key는 열거가 이제 불가능
delete dog.name; // 삭제도 불가능
console.log(dog.name);

// 예제
// 하단과 같이 일반 객체도 접근 불가 등을 세밀하게 조정해줄 수 있다.
const student = {};
Object.defineProperties(student, {
  firstName: {
    value: '흥민',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: '손',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  fullName: {
    get() {
      return `${lastName} ${firstName}`;
    },
    set(name) {
      [this.lastName, this.firstName] = name.split(' ');
    },
    configurable: true,
  },
});
console.log(student);
