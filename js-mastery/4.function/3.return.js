// return을 명시적으로 하지 않으면 자동으로 undefined이 반환됨!
function add(a, b) {
  return a + b;
  // return undefined; > 명시하지 않을 경우 자동으로 undefined
}

const result = add(1, 2);
console.log(result);

// 단순히 무언가를 프린트만 하는 함수라면 (따로 특정한 값을 기대하는 것이 아니라면) 굳이 return을 작성할 필요는 없다.
function print(num) {
  if (num < 0) {
    return; // return으로 함수를 즉시 종료할 수 있음
  }
  console.log(num);
}
print(12);
print(-12);

// return을 함수 중간에 하게 되면 함수가 종료됨
// 사용 예 : 조건이 맞지 않는 경우 함수 도입부분에서 함수를 일찍이 종료함!
