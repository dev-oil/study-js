// String
const text = 'Hello World!';
const textObj = new String('Hello World!');

console.log(text); // Hello World!
console.log(textObj); // [String: 'Hello World!']

// 아무거나 클릭하고 커맨드 + 클릭하면 함수 정보 알 수 있음

// length: 텍스의 길이
console.log(text.length); // 12 (공백 포함)

// [] 대괄호: 배열의 인덱스로 접근
console.log(text[0]); // H
console.log(text[1]); // e
console.log(text[2]); // l

// charAt: 인덱스로 접근
console.log(text.charAt(0)); // H
console.log(text.charAt(1)); // e
console.log(text.charAt(2)); // l

// indexOf: 어떤 문자열이 몇번째 인덱스에 있냐
console.log(text.indexOf('l')); // 2 기본. 처음 찾은 곳 반환
console.log(text.lastIndexOf('l')); // 9 반대. 뒤에서부터 찾기 (근데 이것도 맨 앞에 있는 거 반환)

// includes: 문자열이 포함 하냐 안하냐
console.log(text.includes('tx')); // false
console.log(text.includes('h')); // false (대소문자를 구분함)
console.log(text.includes('H')); // true

// startsWith: 특정한 문자열로 시작하는지 안하는지
console.log(text.startsWith('he')); // false (대소문자 구분)
console.log(text.startsWith('He')); // true

// endsWith: 어떤 문자열로 끝나는지
console.log(text.endsWith('!')); // true

// toUpperCase: 전부 다 대문자로 변환
console.log(text.toUpperCase()); // HELLO WORLD!

// toLowerCase: 전부 다 소문자로 변환
console.log(text.toLowerCase()); // hello world!

// substring: 부분 문자열 잘라오기 (삭제)
console.log(text.substring(0, 2)); // He // 0에서 2인덱스 전까지 잘라올 수 있음

// slice: 부분 문자열 잘라오기 (삭제)
console.log(text.slice(2)); // llo World! // 2번 인덱스부터 잘라오기
console.log(text.slice(-2)); // d! // 뒤에서부터 2번째인 것 까지

// trim: 문자열 공백 제거하기
const space = '              space            ';
console.log(space.trim());

// split: 조건별로 문자열을 끊어주고 배열로 반환하고 싶다면
const longText = 'Get to the, point';
console.log(longText.split(' '));
console.log(longText.split(' ', 2)); // 끊어둔 배열 중 2개만 받고싶다면?
console.log(longText.split(','));
console.log(longText.split(', '));

// MDN String
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
