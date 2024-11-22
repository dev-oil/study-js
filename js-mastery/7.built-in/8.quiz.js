// 퀴즈!
// 1. 문자열의 모든 캐릭터를 하나씩 출력해라
const text = 'Hello World!';
// H
// e
// ...
// !

// My
const resultText = () => {
  for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
  }
};
resultText();

// T
// > same

// 2. 사용자들의 id를 잘라내서 각각의 id를 배열로 보관
const ids = 'user1, user2, user3, user4';
// ['user1', 'user2', 'user3', 'user4']

// My
let resultIds = ids.split(', ');
console.log(resultIds);

// T
// > same

// 3. 1초에 한번씩 시계를 (날짜포함) 출력해보자

// My
const clock = setInterval(() => {
  const now = new Date();
  console.log(now.toLocaleString('ko-KR'));
}, 1000);

// T
// > same
// 다 똑같이 풀었군ㅎㅎㅎㅎ
