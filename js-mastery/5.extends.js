// 클래스 확장
// AS-IS
`class Tiger {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('먹자!');
  }
  sleep() {
    console.log('잔다~');
  }
}

class Dog {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('먹자!');
  }
  sleep() {
    console.log('잔다~');
  }
  play() {
    console.log('놀자-');
  }
}`;

// TO-BE
class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log('먹자!');
  }
  sleep() {
    console.log('잔다~');
  }
}

class Tiger extends Animal {}

const tiger = new Tiger('호랭이');
console.log(tiger);
tiger.sleep();
tiger.eat();

class Dog extends Animal {
  constructor(color, ownerName) {
    super(color); // super는 내가 상속하고 있는 부모 class를 가르킴
    this.ownerName = ownerName;
  }
  play() {
    console.log('놀자-');
  }

  // overriding (오버라이딩) 자식클래스에서 부모 클래스의 함수를 덮어 씌운다
  eat() {
    super.eat(); // 부모 함수 내용을 유지하고, 추가로 더 만들고 싶다면 super.함수() 사용
    // 강아지에만 다시 선언한다면? 덮어씌워짐
    console.log('강아지가 먹는다🦴');
  }
}

const dog = new Dog('바둑이', '바둑왕');
console.log(dog);
dog.sleep();
dog.eat();
dog.play();
