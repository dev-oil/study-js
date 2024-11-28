// 프로미스
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// 약속. 일이 끝나면 뭐 할게요
// then: 일이 끝난 다음에 등록 할 수 있음
// catch: 에러가 발생했을 때 잡을 수 있음
// finally: 최종적으로 모든 일이 끝났을 때 사용 할 수 있음

// 프로미스
// 프로미스는 끝난 이벤트를 알려주는 오브젝트. 비동기적으로 수행.

// [AS-IS]
`function runInDelay(callback, seconds) {
  if (!callback) {
    throw new Error('callback 함수를 전달 해야 함');
  }
  if (!seconds || seconds < 0) {
    throw new Error('seconds는 0보다 커야 함');
  }
  setTimeout(callback, seconds * 1000);
}

try {
  runInDelay(() => {
    console.log('타이머 완료!');
  }, -1);
} catch (error) {}`;

function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error('seconds가 0보다 작음'));
    }
    setTimeout(resolve, seconds * 1000); // 왼쪽은 생략 버전. setTimeout(() => {resolve();}, seconds * 1000);
  }); // promise에 콜백함수 전달 해야함
}

// runInDelay(2)
// .then(필요한 일을 수행)
// .catch(에러를 처리)
// .finally(최종적으로 무조건 호출!)
// then과 catch는 둘중 하나만 호출, finally는 무조건 호출

runInDelay(2)
  .then(() => console.log('타이머 완료!'))
  .catch(console.error) // error => console.error(error)
  .finally(() => console.log('끝!'));

// 성공하는 케이스에서만 처리하고 싶다그러면 then만 사용하면 됨
// runInDelay().then(() => console.log('타이머 완료!'));
