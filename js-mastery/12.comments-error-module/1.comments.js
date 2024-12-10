// 주석 Comments
// 한줄 짜리 주석을 작성할 때 씀
// TODO(devoil): 해야할 일을 작성
// ex) TODO(devoil): xx 기능 구현하기

/**
 * 주석은 코드 자체를 설명하는 것이 아니라,
 * 왜(WHY) 와 어떻게(HOW)를 설명하는 것이 좋음
 * (단, 정말 필요한 경우에만)
 */

// +) 코드 동작 내용을 와장창 설명하는 주석은 나쁜 주석

// 외부에서 많이 쓰이는 함수 API인 경우 JSDoc을 사용하면 좋음
// https://github.com/jsdoc/jsdoc

// 함수 바로 위에서 별표함수 만들고 바로 enter 누르면 자동으로 만들어줌
/**
 * 주어진 두 인자를 더한 값을 반환함 << 이건 써줘야함 ㅎ
 * @param {*} a 숫자 1
 * @param {*} b 숫자 2
 * @returns a와 b를 더한 값
 */
function add(a, b) {
  return a + b;
}
