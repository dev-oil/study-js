// 코딩할 때 중요한 컨셉
// 불변성
// immutability == unchangable
// 모든 오브젝트를 변경할 수 없게 만드는 것이 중요.
// 불변성을 유지하면서 코딩하는 것이 중요.

// 함수 내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 💩
// 상태 변경이 필요한 경우에는, 새로운 상태를(오브젝트, 값) 만들어서 반환해야 함 ✨
// 원시값 - 값에 의한 복사
// 객체값 - 참조에 의한 복사 (메모리 주소)
function display(num) {
  num = 5; // ❌
  console.log(num);
}

const value = 4;

display(value); // 5
console.log(value); // 4

// 잘못된 사항
// 1. displayObj 라면서 재할당 일이 들어있음
// 2. 전달된 인자의 값을 함수 내부에서 변경해버림
function displayObj(obj) {
  obj.name = 'Haaland'; // ❌❌❌❌❌ 외부로 부터 주어진 인자(오브젝트)를 내부에서 변경 ❌
  console.log(obj);
}
const sonny = { name: 'Son' };

displayObj(sonny); // { name: 'Haaland' }
console.log(sonny); // { name: 'Haaland' }

// 만약 변경해야한다면
function changeName(obj) {
  // 이름부터 변경하는 느낌을 주도록!
  return { ...obj, name: 'Bellingham' }; // 반환할때는 새로운 오브젝트 만들기!
}
console.log(changeName(sonny)); // { name: 'Bellingham' }
console.log(sonny); // { name: 'Haaland' } 유지 (위에 적용된 사항. . .)
