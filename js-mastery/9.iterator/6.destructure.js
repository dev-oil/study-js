// 구조 분해 할당 Destructuringg Assiggnment
// 데이터 뭉치(그룹화)를 쉽게 만들 수 있다.
const fruits = ['🍎', '🍓', '🍊', '🍑'];
const [first, second, ...others] = fruits;

console.log(first);
console.log(second);
console.log(...others);

const point = [1, 2, 6];
const [x, y, z = 0] = point;
console.log(x);
console.log(y);
console.log(z);

function createEmoji() {
  return ['apple', '🍎'];
}

const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);

const sonny = { name: 'Son', age: 32, job: 'football player' };

// AS-IS
// function display(person) {
//   console.log('이름', person.name);
//   console.log('나이', person.age);
//   console.log('직업', person.job);
// }

// TO-BE
function display({ name, age, job }) {
  console.log('이름', name);
  console.log('나이', age);
  console.log('직업', job);
}

display(sonny);

// 변수로
const { name, age, job: occupation, father = '손웅정' } = sonny;
console.log(name);
console.log(age);
console.log(occupation);
console.log(father);

// Quiz 중첩 구조분해할당
const prop = {
  name: 'Button',
  styles: {
    size: 20,
    color: 'black',
  },
};

function changeColor({ name, styles: { size, color } }) {
  console.log(color);
  // console.log(styles); 이건 안됨
}

changeColor(prop);
