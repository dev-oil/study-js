const obj = {
  name: '흥민',
  age: 32,
};

// 코딩하는 시점에, 정적으로 접근이 확정됨
obj.name;
obj.age;

// 동적으로 속성에 접근하고 싶을 때, 대괄호 표기법 사용!
function getValue(obj, key) {
  return obj[key];
  // return obj.key; // key 라는 이름이 없어서 이렇게는 동작할 수 없음
}
console.log(getValue(obj, 'name'));

// add key
function addKey(obj, key, value) {
  return (obj[key] = value);
}
addKey(obj, 'job', 'world class football player');
console.log(obj);

// delete key
function deleteKey(obj, key) {
  delete obj[key];
}
deleteKey(obj, 'age');
console.log(obj);

// MDN 객체로 작업하기
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Working_with_Objects
