let a = 2;
let b = 3;
let result = a + b * 4;
// 우선순위 조정법 괄호() ex. (a + b) * 4

console.log(result); // 14

result = a++ + b * 4;
console.log(result); // 14

// mdn 연산자 우선순위
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
