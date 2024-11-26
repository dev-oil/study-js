// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

// My
const array = ['🍌', '🍓', '🍇', '🍓'];
const arrayFirst = array.slice(0, 1);
const arraySecond = array.slice(2, 3);

arrayFirst.push('🥝');
arraySecond.push('🥝');

const quizArray1 = arrayFirst.concat(arraySecond);
console.log(quizArray1);

// T
// 헉.. 함수 만들라 했는데..
function replace(array, from, to) {
  const replaced = Array.from(array);

  for (let i = 0; i < replaced.length; i++) {
    if (replaced[i] === from) {
      replaced[i] = to;
    }
  }

  return replaced;
}
const arrayT = ['🍌', '🍓', '🍇', '🍓'];
const result = replace(arrayT, '🍌', '🥝');
console.log('t', result);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

// My
const arr = ['🍌', '🥝', '🍇', '🥝'];
const item = '🥝';

const arrayCounter = (arr, item) => {
  let count = 0;

  for (const i of arr) {
    if (i === item) {
      count += 1;
    }
  }

  return count;
};

console.log(arrayCounter(arr, item));

// T
function count(array, item) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      counter++;
    }
  }
  return counter;
}

console.log('t', count(arr, item));

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

// My
const arr1 = ['🍌', '🥝', '🍇'];
const arr2 = ['🍌', '🍓', '🍇', '🍓'];

const arrayCombine = (arr1, arr2) => {
  let result = [];

  for (const i of arr1) {
    for (const j of arr2) {
      if (i === j) {
        result.push(j);
      }
    }
  }

  return result;
};

console.log(arrayCombine(arr1, arr2));

// T
function match(input, search) {
  const result = [];
  for (let i = 0; i < input.length; i++) {
    if (search.includes(input[i])) {
      result.push(input[i]);
    }
  }
  return result;
}

console.log('t', match(arr1, arr2));
