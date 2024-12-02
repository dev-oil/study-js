// MDN Interation
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols

// iteration 이란?
// 반복 / 순회

// JS에선? 이터레이션 프로토콜이라고 함
// 프로토콜이란? 규격, 약속, 인터페이스

// 이터레이션 프로토콜을 따른다
// 순회가 가능하다를 의미
// ex. array string map set
// 이터레이션 프로토콜을 따르기 때문에 ex. for...of spread 연산자를 사용 가능하다.

// 이터레이션 프로토콜을 따른다는 의미?
// 어떤 객체던지 순회가 가능하기 위해서는 iterable 프로토콜을 따라야 한다는 의미를 가짐
// 내가 순회가 가능한 오브젝트가 되려면
// Symbol.iterator(): Iterator 프로토콜 << 요론 함수와 반복하는 객체

// 정리
// 이터레이션 프로토콜을 따르기 위해서는, 총 2가지 프로토콜을 따라야한다.
// 1. iterable 프로토콜을 따라야함
// 2. iterable 프로토콜을 따른다는 것은, Symbol.iterator을 호출하면, iterator 프로토콜을 따르는 객체를 리턴해야함.
// 3. iterator 프로토콜은 next()라는 함수가 있어서 다음값을 계속 리턴하게 만들면 됨!

// generator란?
// iteration protocol을 준수, 조금 더간편한 방식으로 iterator를 만들 수있음
