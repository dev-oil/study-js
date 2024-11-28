function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`); //바로 즉각적으로 resolve 처리를 만들 수 있음
}

// fetchEgg('🐔') //
//   .then((egg) => console.log(egg));

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  // return Promise.resolve(`🌿 => 🐓`); // 일부러 에러 만들기
  return Promise.reject(new Error('치킨을 가지고 올 수 없음!'));
}

getChicken()
  // .catch((error) => {
  //   console.log(error.name);
  //   return '🐔'; // 적절한 처리
  // }) // 순서에 따라 적절하게 에러 처리가 필요함
  // .then((chicken) => fetchEgg(chicken))
  // .then((egg) => fryEgg(egg))
  // .then((friedEgg) => console.log(friedEgg));

  // 최강 간결버전
  .catch(() => '🐔')
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log);
