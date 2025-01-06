'use strict';

/**
 * 글로벌 컨텍스트의 this
 * - 브라우저: window
 * - 노드: 모듈
 */

console.log(this); // (node) {}

const x = 0;
module.exports.x = x;
console.log(this); // { x: 0 }
console.log(globalThis); // <ref *1> Object [global] - 노드에서 사용할 수 있는 전역 객체 출력 (ex. clearInterval... etc)

// globalThis.setTimeout()
// setTimeout();

// 브라우저 this는 Window {...}
// 브라우저 globalThis 도 window로 동일

console.clear();

/**
 * 함수 내부에서의 this
 * 엄격 모드에서는 undefined
 * 느슨한 모드에서는 globalThis
 */

function fun() {
  console.log(this);
}

fun(); // 노드: <ref *1> Object [global] / 브라우저: Window
// use strict 사용 시 함수 내부에서의 this란 없으니까? 함수 스코프 내부에서의 this의 정보가 없기 때문에 undefined

// 전역에서 this란, 글로벌 객체를 가리킨다.
// 클래스 안에서의 this란, 앞으로 만들어질 인스턴스 자체를 가리킨다.
// 함수에서 this는 엄격모드가 아닌경우에는 글로벌을 가리키지만, 엄격모드일 경우 함수 내부 스코프에 this란 정보가 없기 때문에 undefined 가 된다.

/**
 * 생성자 함수 또는 클래스에서의 this, 앞으로 생성될 인스턴스 자체를 가리킴
 */

function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(this.name);
  };
}

const cat1 = new Cat('냐옹');
const cat2 = new Cat('미야옹');

cat1.printName();
cat2.printName();
