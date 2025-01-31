// 자료구조

// 클래스 / 생성자 함수
// > 사람 : 이름 나이 성별 말한다 먹는다

// 인스턴스  오브젝트
// > 짱구 철수

// 배열
// > 순서 표 대로 데이터 처리 시 유용
// ex) index 0 1 2 3 ...
// 물론 js는 오브젝트 형태의 배열을 사용하기 때문에 메모리 상의 순차적 저장을 보장하진 않지만,,, index 형태로 이루어지는 개념 확인

// 배열을 만든다면?
// 항상 동일한 타입의 데이터만 유지

// 일급객체 first-class object
// > 일반 객체처럼 모든 연산이 가능한 것
// > 값처럼 사용할 수 있는거용
// - 함수의 매개변수로 전달
// - 함수의 반환값
// - 할당 명령문
// - 동일 비교 대상

// 고차 함수 Higher-order function
// > 함수에서 다른 함수를 인자로 받거나 (콜백함수), 함수를 반환하는 함수
// > 권한이 있어서 higher order
// 배열에서도 사용할 수 있는 고차함수들 있음
// 함수단위로 묶어 놓는 것 > 함수형 프로그래밍

// 함수형 프로그래밍
// 함수 자체를 순수함수로 만드는게 중요
// 순수함수? 함수 안에서 불변성을 유지
// > 함수 밖에 있는 특정한 상태를 변경하지 않고, 새로운 값을 리턴하는 것
// > 함수 내부에서 side effect가 없게 만든다
// > 장점 : 에러가 줄고, 가독성이 높아짐

// 함수형 프로그래밍 하는법?
// > 데이터 변경 x, 변수 사용 x, 조건문 x, 반복문 x
