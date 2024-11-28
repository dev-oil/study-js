function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍌');
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍎');
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error('no orange'));
}

// 바나나와 사과를 같이 가지고 오기
getBanana() //
  .then((banana) =>
    getApple() //
      .then((apple) => [banana, apple])
  )
  .then(console.log); // 순차적으로 진행하기 때문에 4초가 걸림

// 프로미스 병렬적으로 한번에 실행하기
// Promise.all: 병렬적으로 한번에 모든 Promise 들을 실행
Promise.all([getBanana(), getApple()]) //
  .then((fruits) => console.log('all', fruits)); // 3초

// Promise.race: 주어진 Promise 중에 제일 빨리 수행되는 것이 이김!
Promise.race([getBanana(), getApple()]) //
  .then((fruits) => console.log('race', fruits)); // 바나나 1초 ㄷㄷ

// allSettled

// 에러 만들기
Promise.all([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log('all-error', fruits))
  .catch(console.log);
// 에러가 나도 all-error가 나타나지 않음

// allSettled: 실패, 성공 여부와 관계없이 배열로 묶어서 보여줌
Promise.allSettled([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log('all-error', fruits))
  .catch(console.log);
