// 객체를 손쉽게 만들 수 있는 템플릿
// 1. 생성자 함수 (오래된 고전적인 방법)
// 2. 클래스 ✨

// 생성자 함수 (AS-IS)
// function Fruit(name, emoji) {
//   this.name = name;
//   this.emoji = emoji;
//   this.display = () => {
//     console.log(`${this.name}: ${this.emoji}`);
//   };
//   // return this; // 생략 가능
// }

// const apple = new Fruit('apple', '🍎');

// 클래스로 변환 (TO-BE)
class Fruit {
  // 생성자 : new 키워드로 객체를 생성할 때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

// apple 이라는 객체는 Fruit 이라는 class의 인스턴스이다.
const apple = new Fruit('apple', '🍎'); // Fruit { display: [Function: display], name: 'apple', emoji: '🍎' }
// orange 이라는 객체는 Fruit 이라는 class의 인스턴스이다.
const orange = new Fruit('orange', '🍊'); // Fruit { display: [Function: display], name: 'orange', emoji: '🍊' }

console.log(apple);
console.log(orange);
apple.display();

// obj는 ?? obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
const obj = { name: 'sonny' };
