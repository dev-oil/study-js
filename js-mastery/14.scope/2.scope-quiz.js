{
  const x = 1;
  {
    const y = 2;
    console.log(x); // 값은 1
  }
  console.log(x); // 값은 1
  // console.log(y); // 에러
}

const text = 'global'; // 전역 변수, 전역 스코프 (글로벌 변수, 글로벌 스코프)
{
  const text = 'inside block1'; // 지역 변수 (로컬 변수), 지역 스코프 (로컬 스코프)
  {
    const text = 'inside block2';
    console.log(text); // 값은 inside block2 // 가장 근접한 text 출력
  }
}
