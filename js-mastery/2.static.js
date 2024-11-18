// 재사용성을 높이는 방법
// static 정적 프로퍼티, 메서드
class Fruit {
  static MAX_FRUITS = 4; // (인스턴스에 포함되지 않음)
  // 생성자 : new 키워드로 객체를 생성할 때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }

  // 클래스 레벨의 메서드 (인스턴스에 포함되지 않음)
  static makeRandomFruit() {
    // 클래스 레벨의 메서드에서는 this를 참조할 수 없음
    return new Fruit('banana', '🍌');
  }

  // 인스턴스 레벨의 메서드
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUITS);
// class의 이름으로 바로 호출할 수 없음
// console.log(Fruit.name);
// Fruit.display();

// apple 이라는 객체는 Fruit 이라는 class의 인스턴스이다.
const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');
console.log(apple);
console.log(orange);
apple.display();

// 유용한 class들
Math.pow();
Number.isFinite(1);
