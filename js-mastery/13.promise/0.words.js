// 자바스크립트 런타임 환경 안에
// 자바스크립트 엔진 안에 (소스코드를 엔진이 하나하나 이해하고 실행하죠)
// 메모리힙과 콜스택
// 메모리힙 : 소스코드에서 동적으로 객체를 생성하는 경우에 메모리힙에 생성됨
// 콜스택 : 우리 함수 실행 순서를 기억함
// 들어가죠 C -> B -> A
// 실행 A -> B -> C

// 싱글 컨텍스트 스택
// 자바스크립트 엔진은 하나의 일만 처리 가능
// 이걸 '싱글 쓰레드' 라고 한다.
// 자바스크립트는 기본적으로 한번에 한가지 일만 하기 때문에 동기적이라고 볼 수 있음

// 자바스크립트는 순차적으로밖에 안되나요?
// 자바스크립트 런타임 환경(호스트)에서 제공해주는 webAPIs 나 노드에서 제공하는 API 들이 있음.
// 그 API 들은 멀티 쓰레드로 동작함 그래서 다양하게 비동기적으로 사용할 수 있음

// 콜백 함수는 태스크 큐에 던져놓고 이벤트 루프가 좀 보다가 콜스택 비면 콜백 함수를 콜스택에 던져서 수행하게 해줌
