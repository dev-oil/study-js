const num1 = 123;
const num2 = new Number(123); // 굳이 객체로 -> 메모리 낭비일 수 있숨

console.log(num1); // 123
console.log(num2); // [Number: 123]

console.log(typeof num1); // number
console.log(typeof num2); // object

// MAX_VALUE 정수에서 사용할 수 있는 최댓값
console.log(Number.MAX_VALUE); // e+308 === 10의 308승

// MIN_VALUE 정수에서 사용할 수 있는 최솟값
console.log(Number.MIN_VALUE);

// MAX_SAFE_INTEGER 안전하게 사용할 수 있는 최댓값
console.log(Number.MAX_SAFE_INTEGER);

// MIN_SAFE_INTEGER 안전하게 사용할 수 있는 최솟값
console.log(Number.MIN_SAFE_INTEGER);

// NaN 숫자가 아닌 것
console.log(Number.NaN);

// NEGATIVE_INFINITY / POSITIVE_INFINITY 무한 양수 음수
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

// 사용 예제
// 예 1. num1 이 숫자인지 아닌지 확인용
if (num1 === Number.NaN) {
  console.log('NaN');
} else {
  console.log('is number');
}
// 예 2. 숫자인지 아닌지 메소드
if (Number.isNaN(num1)) {
  console.log('NaN');
} else {
  console.log('is number');
}

// 예 3. 범위 확인용
if (num1 < Number.MAX_SAFE_INTEGER) {
  console.log('안전한 범위의 숫자군');
}

// toExponential: 지수표기법 (매우 크거나 작은 숫자를 표기할때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential()); // 1.02e+2 / e+2의 의미는 10의 2승이라는 뜻 === 1.02 * 10의 2승(100)

// toFixed: 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed()); // '1234'

// toString: 숫자를 그냥 문자열로
console.log(num4.toString()); // '1234.12'

// toLocaleString: 그나라 지역에 맞게 보여주는 숫자
console.log(num4.toLocaleString('ar-EG')); // 아랍

// toPrecision: 원하는 자릿수까지 유효하도록 반환
console.log(num4.toPrecision(5)); // 5자리 수까지만 반환하고싶다 // 1234.1
console.log(num4.toPrecision(2)); // 정수 내에서 더 작은 숫자일 시 (전체 자릿수 표기가 안될 때) 지수표기법으로 변환

// EPSILON: 0과 1사이에서 나타낼 수 있는 가장 작은 숫자
if (Number.EPSILON > 0 && Number.EPSILON < 1) {
  console.log(Number.EPSILON); // 2.220446049250313e-16
}

// EPSILON 추가 설명
// 우리는 10진수로 계산을 하지만, 자바스크립트에서는 내부적으로 계산을 할 때 10진수를 2진수로 각각 변환을 해서 더하고 빼는 연산을 한 후, 2진수 (0과 1)를 다시 10진수로 반환한다.
// 이런 과정에서 정확하게 부동소수점까지 계산되지 않아 작은 오차가 발생됨
// 이러한 작은 오차를 나타내는게 엡실론 ~
const num = 0.1 + 0.2 - 0.2; // 0.1?
console.log(num); // 0.10000000000000003 ㅋㅋㅋ

function isEqual(original, expected) {
  // return original === expected; (1)
  // return original - expected < Number.EPSILON; // (2)
  return Math.abs(original - expected) < Number.EPSILON; // (3) 절댓값으로 (음수안되게)
}
console.log(isEqual(1, 1)); // true
console.log(isEqual(0.1, 0.1)); // true
console.log(isEqual(num, 0.1)); // (1) 일 시 false / (2) 일 시 true / (3) 일 시 true

// 결론.
// 자바스크립트에서 실수끼리 계산을 할 때 우리가 예상하지 못한 작은 차이가 발생할 수 있음
// 그럴땐 EPSILON

// MDN Number
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
