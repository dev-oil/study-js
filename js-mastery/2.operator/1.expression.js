let b; // 선언문
b = 2; // 표현식, 할당문

// let a = let b; // error
let a = (b = 2);
console.log(a);
