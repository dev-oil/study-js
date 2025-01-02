// 함수의 호이스팅은 함수의 선언문 전에 호출이 가능하게 해줌
// 함수의 선언문은 선언 이전에도 호출이 가능함
print();

function print() {
  console.log('hello');
}

// 변수(let, const)와 클래스는 선언만 호이스팅이 되고,
// 초기화는 안된다.
// 초기화 전, 변수에 접근하면 컴파일(빌드) 에러가 발생한다.
// console.log(hi); // Cannot access 'hi' before initialization
let hi = 'hi';
let func1 = function () {};

// const cat = new Cat(); // Cannot access 'Cat' before initialization 초기화가 안되었습니다요
class Cat {}

let x = 1;
{
  console.log(x); // Cannot access 'x' before initialization 블럭 안에서 변수를 선언했기 때문에, 선언 부분만 올라오고 초기화가 안되었기 때문에...
  let x = 2;
}
