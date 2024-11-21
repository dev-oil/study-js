// const son = {
//   name: 'sonny',
//   display: function () {
//     console.log(`${this.name}: ⚽️🐓`);
//   },
// };

// const park = {
//   name: 'ji-sung',
//   display: function () {
//     console.log(`${this.name}: ⚽️😈`);
//   },
// };

// 생성자 함수
function Player(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ⚽️${this.emoji}`);
  };
  // return this; // 생략 가능 (생성자 함수에서는 자동적으로 this가 리턴되게 함)
}

const son = new Player('sonny', '🐓');
const park = new Player('ji-sung', '😈');

console.log(son);
console.log(park);

console.log(son.name);
console.log(son.emoji);
son.display();
