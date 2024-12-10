let count = 0;

// 한개만 보낼 때 : export default
// 두개 이상 : 그냥 export 후 import 시 {} 중괄호 이용 및 동일 이름만 가능
// 이름 바꾸고 싶다면 { increase as increase1 } 처럼
export function increase() {
  count++;
  console.log(count);
}

export function getCount() {
  return count;
}
