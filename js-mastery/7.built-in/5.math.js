// Math
// static properties, method

// E: 오일러 상수, 자연로그의 밑
console.log(Math.E); // 2.718281828459045

// PI: 원주율 파이값
console.log(Math.PI); // 3.141592653589793

// static method
// abs: 절대값
console.log(Math.abs(-10)); // 10

// ceil: 소수점 이하를 올림
console.log(Math.ceil(1.4)); // 2

// floor: 소수점 이하를 내림
console.log(Math.floor(1.4)); // 1

// round: 소수점 이하를 반올림
console.log(Math.round(1.4)); // 1
console.log(Math.round(1.7)); // 2

// trunc: 소수점에서 정수만 반환
console.log(Math.trunc(1.53435)); // 1

// max: 최대, 최솟값을 찾기
console.log(Math.max(1, 5, 3)); // 5
console.log(Math.min(1, 5, 3)); // 1

// ** or pow: 거듭제곱
console.log(3 ** 2); // 9
console.log(Math.pow(3, 2)); // 9

// sqrt: 제곱근(거듭제곱의 반대)
console.log(Math.sqrt(9)); // 3

// random: 랜덤 값 반환 진짜 많이쓰는
console.log(Math.random()); // 0부터 1사이의 랜덤한 값 반환

// 1 ~ 10 까지의 랜덤한 값을 반환하고 싶다면?
let random = Math.floor(Math.random() * 10 + 1);
console.log(random);

// MDN Math
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
