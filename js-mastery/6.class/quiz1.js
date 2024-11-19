// 카운터를 만들기
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터 만들기
// Counter 클래스 만들기

// My
`class Counter {
  constructor(number) {
    this.number = number;
  }

  display = () => {
    for (let i = 1; i <= this.number; i++) {
      console.log(i);
    }
  };
}

const useCounter = new Counter(3);
useCounter.display();
`;

// Answer
class Counter {
  #value;
  constructor(startValue) {
    if (isNaN(startValue) || startValue < 0) {
      this.#value = 0;
    } else {
      this.#value = startValue;
    }
  }

  get value() {
    return this.#value;
  }

  increment = () => {
    this.#value++;
  };
}
const counter = new Counter();

counter.increment(); // 1
counter.increment(); // 2

console.log(counter.value);
