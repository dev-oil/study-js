// 접근자 프로퍼티 (Accessor Property)
// 클래스의 변수처럼 보이지만, 실제로는 함수를 말하는 것
class Student {
  // 생성자에서 한번 만들어 지고 나선 업데이트가 안됨
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    // 접근시 get
    // 일을하는 함수라기보단 어떤 조합을 보여주기만 하는 것이니까 > 속성의 한 부분같은 것이면 get 붙여준다
    return `get ${this.lastName} ${this.firstName}`;
  }
  set fullName(value) {
    // 할당시 set
    console.log('set', value);
  }
}

const student = new Student('흥민', '손');
student.firstName = '강인';

console.log(student.firstName);
// console.log(student.fullName()); // why 얘만 함수로 호출되는가 . . . => 생성자에서 한번 만들어 지고 나선 업데이트가 안되기 때문에, 호출하면서 계속 만들어 주고 싶으면 함수로 만들어야함.
// 근데 함수모양으로 호출하는게 싫다면 . .

console.log(student.fullName);
student.fullName = '김민재';

// get과 set(접근자 프로퍼티)을 쓸 때
// 무언가를 처리하는 행동은 아닌데, 프로퍼티의 일부분이긴 함. 무언가를 조합해서 만들거나 또는 get이나 set을 할 때 특정한 일을 좀 더 해주고 싶다면..
