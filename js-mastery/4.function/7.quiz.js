// 주어진 숫자 만큼 0부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 함
// 조건 1 - 5, 순회하는 숫자를 다 출력하고 싶음
// 조건 2 - 5, 순회하는 숫자의 2배 값을 다 출력하고 싶음
// function iterate(max, action)

// My
`const iterate = (max, action) => {
  let num = max;
  let result = action(max);

  return result;
};

const allPrint = (max) => {
  for (let i = 0; i < max; i++) {
    console.log(i);
  }
};

const allPrintDouble = (max) => {
  for (let i = 0; i < max; i++) {
    console.log(i * 2);
  }
};

iterate(5, allPrintDouble);`;

// T
function iterate(max, action) {
  for (let i = 0; i < max; i++) {
    action(i);
  }
}

function log(num) {
  console.log(num);
}

function doubleAndLog(num) {
  console.log(num * 2);
}

iterate(3, log); // iterate(3, (num) => console.log(num));
iterate(3, doubleAndLog); // iterate(3, (num) => console.log(num * 2));

// 흠 더 중복될 수 있는 부분을 줄였어야 했는데 아차차

// setTimeout
setTimeout(() => {
  console.log('3초 뒤 이 함수가 실행될 거예용');
}, 3000);
