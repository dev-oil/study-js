// 1번 예제
// 내부에서 외부로 접근 하는 것은 가능하다.
// 외부에서 내부에서 설정된 값을 접근하는 것은 불가능하다.
`const text = 'hello';
function func() {
  console.log(text);
}
func();`;

// 2번 예제
// 클로저
// 내부에서 외부를 모두 가르킬 수 있다고 전부 클로저가 되냐? 그건 아님
// 중첩된 함수에서, 내부의 함수와 외부의 함수의 상태 (렉시컬 환경)가 저장되어져 있기 때문에 내부함수에서 외부 함수 데이터에 접근할 수 있는 것을 클로져라고 함 (내부와 외부의 환경이 묶여있는 느낌, 닫혀있는 느낌이라 클로저라고 생각하면 됨)

// function outer() {
//   const x = 0;
//   function inner() {
//     console.log(`inside inner: ${x}`);
//   }
//   inner();
// }
// outer();

function outer() {
  const x = 0;
  function inner() {
    console.log(`inside inner: ${x}`);
  }
  return inner; // 클로저에 의해서 이 함수가 리턴이 될 때 inner 뿐만 아니라, 함수 외부에 있는 lexical 환경 즉, x라는 변수가 들어있는 outer의 렉시컬 환경도 묶여서 클로저로 반환이 되기 때문에
}
const func1 = outer();
func1();
