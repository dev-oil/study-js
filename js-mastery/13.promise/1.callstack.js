function a() {
  for (let i = 0; i < 1000000000; i++) {
    // bad
  }
  return 1;
}

function b() {
  return a() + 1;
}

function c() {
  return b() + 1;
}

console.log('시작했다!');
const result = c();
console.log(result); // 3
