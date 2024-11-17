// 단항연산자 Unary Operators
// + (양)
// - (음)
// ! (부정)

// 양수 / 음수
let a = 5;

a = -a; // -1 * 5
console.log(a); // -5

a = -a;
console.log(a); // 5

a = +a;
console.log(a); // 5

a = -a; // -5
a = +a; // +(-5)
console.log(a); // -5

// 부정 연산자
let boolean = true;
console.log(boolean); // true
console.log(!boolean); // false
console.log(!!boolean); // true

// + 연산자 사용시, 숫자가 아닌 타입들을 숫자로 변환하면 어떤 값이 나오는지 확인할 수 있음
console.log(+false); // 0
console.log(+null); // 0
console.log(+''); // 0
console.log(+true); // 1
console.log(+'text'); // NaN
console.log(+undefined); // NaN

console.log(!!1); // ! 부정연산자
// !! 값을 boolean 타입으로 변환 함
