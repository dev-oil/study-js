// 래퍼 객체 (Wrapper Object)
// 원시값을 필요에 따라서 관련된 빌트인 객체로 변환한다.
const number = 123; // number 원시 타입
// number 원시 타입을 감싸고 있는 Number 객체로 감싸짐
console.log(number.toString()); // 점을 찍으면 함수들이 ㄷㄷ // string
console.log(number); // int

const text = 'text'; // string 문자열 원시 타입

console.log(text);
console.log(text.length); // string 객체
console.log(text.trim());

// .함수 사용시 원시타입이 자동으로 래퍼 객체로 감싸져서 필요한 함수를 사용 ~~
// 안쓰면 다시 원시 타입!

// 객체 짱인데 그럼 걍 다 객체로 때려버리지 왜요..?
// > 무겁고,, 메모리 많이 소요,, 어플리케이션이 뚱뚱
