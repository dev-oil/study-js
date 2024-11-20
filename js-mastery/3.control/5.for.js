// 반복문 Loop Statement
// for (변수 선언문; 조건식; 증감식) { 조건이 맞을 때 까지 코드 실행 }
// 실행 순서:
// 1. 변수 선언문
// 2. 조건식의 값이 참이면 { } 코드블럭을 수행
// 3. 증감식을 수행
// 4. 조건식이 거짓이 될 때 까지 2번과 3번을 반복함

for (let i = 0; i < 5; i = i + 2) {
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}

// 무한 루프 💩
// for(;;) {
//   console.log('무한도전');
// }

// 반복문 제어: continue, break;
for (let i = 0; i < 20; i++) {
  if (i === 10) {
    continue; // 하위 코드를 전체 무시하고 다시 증감식
    console.log('i가 드디어 10이 되었다!');
    break; // for 문 정지
  }
  console.log(i);
}
