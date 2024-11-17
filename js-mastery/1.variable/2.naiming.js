// 주석1
/**
 * 주석2
 * 다음줄로 자동으로 넘어감
 */

/** 변수 규칙
 * 라틴문자(0-9, a-z, A-Z), _
 * 대소문자를 구분함
 * 추천: camelCase (likeThis) ✅
 * 한국어 ❌
 * 예약어 ❌
 * 숫자로 시작 ❌
 * 특수 문자 ❌ (_, $ 두가지는 예외)
 * 이모지 ❌
 * 여러개의 변수를 1, 2, 3 숫자로 구분 ❌ -> 최대한 의미 있게, 구체적인 이름으로 작성하자
 */

let apple;
let redApple; // camelCase format

// 나쁜 예제 1 💩
let num = 20; // 의미가 없음

// 좋은 예제 1 ✨
let myAge = 2; // 의미를 담아서

// 나쁜 예제 2 💩
let audio1; // 오디오 뭐,,?
let audio2;

// 좋은 예제 2 ✨
let backgroundAudio; // 구체적으로 작성
let windAudio;

// 꿀팁! 🍯
// audio만 검색해도 나타날 수 있음
let audioBackground;
let audioWind;
