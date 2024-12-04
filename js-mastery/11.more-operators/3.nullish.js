// Nullish Calescin Operator
// ES11 (ECMAScript 2020)
// ?? null, undefined
// || falshy한 경우 설정(할당) 0, -0, ''

let num = 0;
console.log(num || '-1'); // falshy 값으로 판단되니까...

let num2;
console.log(num2 ?? '-1'); // ?? 를 사용하면 null 과 undefined 값일 때만 -1 반환
