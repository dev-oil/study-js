// 산술 연산자 (Arithmetic operators)
// + 더하기
// - 빼기
// * 곱하기
// / 나누기
// % 나머지 값
// ** 지수 (거듭제곱)

console.log(5 + 2); // 7
console.log(5 - 2); // 3
console.log(5 * 2); // 10
console.log(5 / 2); // 2.5
console.log(5 % 2); // 1
console.log(5 ** 2); // 25 es7에서 추가됨
console.log(Math.pow(5, 2)); // 거듭제곱 이전에는 이렇게 사용...

// + 연산자 주의점!
let text = '두개의' + '문자들';
console.log(text);

text = '1' + 1; // 숫자와 문자열을 더하면 문자열로 반환됨
console.log(text); // string 11
