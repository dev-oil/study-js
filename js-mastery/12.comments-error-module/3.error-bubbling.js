// Bubbling up, Propagating
function a() {
  throw new Error('error!');
}

function b() {
  // a는 에러를 일으키는 함수일 뿐이고 그에러는 b에서 a를 호출할때 발생, 그러니까 b에서 캐치
  try {
    a();
  } catch (error) {
    console.log('생각해보니깐 이 에러는 내가 핸들링 할 수 없을 것 같군!');
    throw error;
  }
}

function c() {
  b();
}

try {
  c();
} catch (error) {
  console.log('Catched!');
}

console.log('done!');

// 에러를 일으키는 함수는 중금속과 같아서, 이를 포함한 모든 함수에까지 전파된다.

// 멸치(a)가 중금속에 중독되면 그것을 먹은 고등어(b), 참치(c)까지 중금속이 발견되는 것이다.

// catch(차단) 하는 것은 연구자 마음이기 때문에, 어디에서 차단할지는 선택할 수 있다.

// 만약, 고등어(b)에서 발견한 중금속을 처리하기가 힘들것 같은데, 고등어(b)가 원인이란건 확실하다면?

// 이럴 경우, 고등어(b)의 catch(차단)벽을 의도적으로 내려서(throw Error) 참치(c)에서 처리할 수 있다.
