// promise 내부 동작을 구현해보자.
// step 1 - resolve() 와 reject() 구현
// step 2 - then() 구현
// step 3 - catch() 구현
// step 4 - 비동기 처리를 위한 큐(Queue)처리 추가

// promise의 특징
// state:
// pending(대기) -> resolve 시 fulfilled / reject 시 rejected

// result:
// undefined -> resolve 시 value / reject 시 error

// then()에서 resolve()의 결과를 받아야 함
// catch()에서 reject()의 결과를 받아야 함

// keyword - new Promise 에 전달되는 함수 - executor 라고 부름

class MyPromise {
  constructor(executor) {
    this.value = undefined;
    this.isResolved = false;
    this.thenCallback = null;

    const resolve = (value) => {
      this.value = value;
      this.isResolved = true;
      if (this.thenCallback) {
        this.thenCallback(value);
      }
    };

    executor(resolve); // 실행
  }

  then(callback) {
    if (this.isResolved) {
      callback(this.value); // 이미 resolve된 경우 즉시 실행
    } else {
      this.thenCallback = callback; // 나중에 실행할 콜백 저장
    }
  }
}

// 실행 예제
const x = new MyPromise((resolve) => {
  setTimeout(() => resolve('🎉 비동기 성공!'), 3000);
});

setTimeout(() => {
  x.then((result) => console.log(result));
}, 2000);
