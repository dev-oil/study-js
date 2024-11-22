console.log(globalThis); // 브라우저에선 window
console.log(this); // node에선 모듈을 가리키지만, 대체적으로 전역 객체를 의미 / 브라우저에선 window

console.log(Infinity);
console.log(NaN);
console.log(undefined);

// eval: 문자열을 자바스크립트로 인지해줌
eval('const num = 2; console.log(num)');

// isFinite: 숫자가 유한한지 무한한지 판별 유한-true / 무한-false
console.log(isFinite(1)); // true
console.log(isFinite(Infinity)); // false

// parseFloat: 문자열인데 소숫점이 숫자로 나타나는 경우가 있다면 숫자로 변환 (그대로)
console.log(parseFloat('12.43')); // 12.43

// parseInt: 문자열 안에 숫자가 있다면, 정수로 변환해줌
console.log(parseInt('12.43')); // 12
console.log(parseInt('11')); // 11

// URL (URI, Uniform Resource Identifier 의 하위 개념)
// 어떤 리소스를 나타낼 수 있는 하나의 고유한 주소나 아이디
// 아스키 문자로만 구성되어야 함
// 한글이나 특수문자는 이스케이프 처리 해야 한다
const URL = 'https://개발닷컴.com';
const encoded = encodeURI(URL);
console.log(encoded);

const decoded = decodeURI(encoded);
console.log(decoded);

// 전체 URL이 아니라, 부분적인 것은 Component 이용
const part = '개발닷컴.com';
console.log(encodeURIComponent(part));
