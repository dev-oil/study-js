// 논리 연산자 Logical Operator
// && 그리고
// || 또는
// 단축평가: short-circuit evaluation

const obj1 = { name: '🐶' };
const obj2 = { name: '😺', owner: 'sonny' };

if (obj1 && obj2) {
  console.log('둘다 true!');
}

if (obj1 || obj2) {
  console.log('하나라도 true!');
}

let result = obj1 && obj2; // 평가 단축. 변수에 넣게 되면 뒤를 봐야 true라 두번째 오브젝트를 출력
console.log(result); // { name: '😺', owner: 'sonny' }
// 엥????????????????????????????????????? ㄷㄷ

result = obj1 || obj2; // 평가 단축. 앞만 봐도 true라 첫번째 오브젝트를 출력 (만약 앞이 false 였다면 두번째가 나왔겠지)
console.log(result); // { name: '🐶' }

// 활용 예
// 조건이 truthy일 때 && 무언가를 해야 할 경우
// 조건이 falshy일 때 || 무언가를 해야 할 경우

function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error('아직 주인이 없어!');
  }
  animal.owner = '바뀐주인';
}

function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error('이미 주인이 있어!');
  }
  animal.owner = '새로운주인';
}

// 예제 1. 조건이 truthy일 때 && 무언가를 해야 할 경우
obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);

console.log(obj1); // obj1.owner 가 이미 false 여서 실행이 안돼서 실행 ㄴㄴ
console.log(obj2);

// 예제 2. 조건이 falshy일 때 || 무언가를 해야 할 경우
obj1.owner || makeNewOwner(obj1); // false라 뒤 실행
obj2.owner || makeNewOwner(obj2); // true라 앞만 보여주고 뒤 실행 안함 ㅇㅇ

console.log(obj1); // { name: '🐶', owner: '새로운주인' }
console.log(obj2); // { name: '😺', owner: '바뀐주인' }

// null 또는 undefined인 경우를 확인할 때
let item; // = { price: 1 };
const price = item && item.price; // 이렇게 작성하면 바로 app crashed로 와장창 깨지는 일은 없음
console.log(price); // undefined

// 기본 값을 설정
// function print(message = 'hi')
// default 파라미터 쓰면 되는거 아닌가용??
// default parameter는 전달하지 않거나, undefined인 경우에만 설정된다.
// || or 연산자의 경우 값이 falshy 한 경우 설정(할당): 0, -0, null, undefined, ''
function print(message) {
  const text = message || 'hello';
  console.log(text);
}

print(); // hello
print(null); // 만약 default 파라미터라면 미설정과 undefined 설정에서만 먹히기 때문에, null 값이 그대로 나와버림
print(0); // 0도 동일하다
