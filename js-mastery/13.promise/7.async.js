// 동기적인 코드처럼 보이지만, 비동기적인 코드 ~~~
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

// 바나나와 사과를 같이 가지고 오기 (async await)
// function fetchFruits() {
//   return getBanana() //
//     .then((banana) =>
//       getApple() //
//         .then((apple) => [banana, apple])
//     );
// }
// fetchFruits() //
//   .then((fruits) => console.log(fruits));

// 사용!!
async function fetchFruits() {
  const banana = await getBanana(); // 바나나 값을 기다렸다가 나오면 할당.
  const apple = await getApple(); // 동일
  return [banana, apple];
}
fetchFruits() //
  .then((fruits) => console.log(fruits));

// promise 를 리턴하는 함수를 호출 할 때는 await 라는 키워드를 써서 기다렸다가, promise 값이 resolve 되면 그 값을 반환해서 변수에 할당함
