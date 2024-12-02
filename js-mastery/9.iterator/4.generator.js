// const multiple = {
//   [Symbol.iterator]() {
//     const max = 10;
//     let num = 0;
//     return {
//       next() {
//         return { value: num++ * 2, done: num > max };
//       },
//     };
//   },
// };

function* multipleGenerator() {
  try {
    for (let i = 0; i < 10; i++) {
      console.log(i); // 0
      yield i ** 2; // return은 바로 리턴하는 반면, yield는 사용자가 원할 때 줌
    }
  } catch (error) {
    console.log(error);
  }
}
const multiple = multipleGenerator();

let next = multiple.next();
console.log(next); // { value: 0, done: false }
console.log(next.value, next.done); // 0 false

// 만약 중간에 리턴하면 끝나버림
// multiple.return();

// 에러 던지기
multiple.throw('Error!');

// 리턴시 끝 . undefined true 나옴
next = multiple.next(); // 1
console.log(next.value, next.done); // 1 false
