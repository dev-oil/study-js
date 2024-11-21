// 객체 : 복합 데이터

// 객체가 있는 이유
// 서로 연관있는 속성(데이터.프로퍼티)과 행동(함수)을 묶어주기 위해서

// 순수 데이터 객체
let apple = {
  name: 'apple',
  color: 'red',
};

// 상태와 행동 객체
let peach = {
  name: 'peach', // 객체 안에서 상태를 가지고 있는 데이터를 속성(프로퍼티) 라고 부름
  display: function () {
    // 행동 즉 함수는 메서드 라고 부름
    console.log('i like peach');
  },
};

// 밀접하게 관련 있는 상태와 행동을 객체로 묶어야 겠군

// MDN 객체
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object
