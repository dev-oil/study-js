// 프로토타입을 베이스로한 객체지향 프로그래밍
function Animal(name, emoji) {
  this.name = name;
  this.emoji = emoji;
}

Animal.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

function Dog(name, emoji, owner) {
  // super(name, emoji)
  Animal.call(this, name, emoji);
  this.owner = owner;
}

// Dog의 프로토타입을 Animal로 연결
// Dog.prototype = Object.create(Object.prototype);
Dog.prototype = Object.create(Animal.prototype); // 상속해주는 방법

Dog.prototype.play = () => {
  console.log('놀자!');
};

function Tiger(name, emoji) {
  Animal.call(this, name, emoji);
}

Tiger.prototype = Object.create(Animal.prototype);
Tiger.prototype.hunt = () => {
  console.log('사냥하자!');
};

const dog1 = new Dog('멍멍이', '🐶', 'sonny');
dog1.play();
dog1.printName();

const tiger1 = new Tiger('어흥', '🐯');
tiger1.hunt();
tiger1.printName();

// 상속도 확인하는 법 (instanceof)
console.log(dog1 instanceof Dog); // true
console.log(dog1 instanceof Animal); // true
console.log(dog1 instanceof Tiger); // false
