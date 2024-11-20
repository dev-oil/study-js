// scope example
`function outer() {
  const x = 0;
  function inner() {
    x;
  }
  inner();
}

outer();`;

// closure
function outer() {
  const x = 0;
  function inner() {
    x;
  }
  return inner;
}

const inner = outer();
inner();

// closure란?
// inner 함수에서 외부에 있는 outer 함수의 scope에 접근할 수 있는 것을 closure라고 한다.
// 함수가 중첩되어 있을 때, 내부 함수가 외부 함수의 렉시컬 환경에 접근할 수 있으니까 외부 환경에 접근이 가능한게 클로저
