// 문자열타입
let string = '안녕하세요~ 🫠';

string = `안녕~`;
console.log(string);

// 특수 문자 출력하는 법
string = '"안녕~"이라고 말하다';
console.log(string);

/**
 * 줄바꿈 : \n
 * 띄어쓰기 (tab) : \t
 * 유니코드 : \u원하는유니코드
 */
string = '안녕~\n하세요~\t\t\t반갑습니다~\\\u09AC';
console.log(string);

// 템플릿 리터럴 (Template Literal)
let id = 'devoil';
let greetings = '"안녕하세요~ ' + id + '입니다. \n행복한 하루 보내세요~"';
console.log(greetings);

greetings = `'안녕하세요~ ${id}입니다. \n행복한 하루 보내세요~'`;
console.log(greetings);
