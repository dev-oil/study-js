// 접근제어자 - 캡슐화
// private(#) - 내부에서만 사용 가능 외부 불가
// public(기본) - 전부 사용가능
// protected - 상속 경우에만 사용 가능

class Fruit {
  #name;
  #emoji;
  #type = '과일';
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }

  #display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}

const apple = new Fruit('apple', '🍎');

// apple.#name = '오렌지'; // #field는 외부에서 접근이 불가능함

console.log(apple);
