const x = 0;
const y = 0;
const coordinate = { x, y }; // { x: x, y: y }
// 이름이 똑같다면 생략이 가능함!

console.log(coordinate);

function makeOjb(name, obj) {
  return {
    name, // name: name
    age, // age: age
  };
}
