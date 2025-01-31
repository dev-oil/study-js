// JSON: JavaScript Object Notion
// 서버와 클라이언트(브라우저, 모바일) 간의 HTTP 통신을 위한
// 오브젝트 형태의 텍스트 포맷
// stingify(object): JSON
// parse(JSON): object

const sonny = {
  name: 'sonny',
  age: '32',
  eat: () => {
    console.log('eat');
  },
};

// 직렬화 Serializing: 객체를 문자열로 변환
const json = JSON.stringify(sonny);
console.log(sonny); // { name: 'sonny', age: '32', eat: [Function: eat] }
console.log(json); // {"name":"sonny","age":"32"}

// 역직렬화 Deserializing: 문자열 데이터를 자바스크립트 객체로 변환
const obj = JSON.parse(json);
console.log(obj); // { name: 'sonny', age: '32' }
