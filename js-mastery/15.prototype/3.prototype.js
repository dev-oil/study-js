// const dog1 = { name: '바둑이', emoji: '🐶' };
// const dog2 = { name: '코코', emoji: '🐩' };

function Dog(name, emoji) {
  this.name = name;
  this.emoji = emoji;

  // 인스턴스 레벨의 함수 (메모리 낭비 - 인스턴스 객체 모든 곳에 다 들어가버림)
  // this.printName = () => {
  //   console.log(`${this.name} ${this.emoji}`);
  // };

  // 프로토타입 레벨의 함수
  Dog.prototype.printName = function () {
    console.log(`${this.name} ${this.emoji}`);
  };
}

const dog1 = new Dog('뭉치', '🐶');
const dog2 = new Dog('코코', '🐩');
console.log(dog1, dog2); // 만들어진 인스턴스 레벨에서는 보이지 않음

dog1.printName(); // but 사용은 가능하다

// 오버라이딩
// 인스턴스 레벨에서(자식) 동일한 이름으로 함수를 재정의 하면 (오버라이딩 하면)
// 프로토타입 레벨의(부모) 함수의 프로퍼티는 가려진다 (섀도잉 된다)

dog1.printName = () => {
  console.log('안녕!');
};
dog1.printName();

// 정적 레벨
Dog.hello = () => {
  console.log('hello');
};

// dog1.hello(); // 접근 불가!
Dog.hello(); // 생성자 함수 이름으로 접근해야 가능
Dog.MAX_AGE = 20;

console.log(Dog);
