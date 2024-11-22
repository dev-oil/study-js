// 시간 객체 생성 시 시간 출력
// UTC 기준 (협정 세계시, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)
console.log(new Date()); // 현재 시간 출력
console.log(new Date('Jun 5, 2022')); // 날짜 년도 설정
console.log(new Date('2022-12-17T03:24:00')); // 시간까지

console.log(Date.now()); // 1970년 1월 1일부터 현재까지의 밀리초
console.log(Date.parse('2022-12-17T03:24:00')); // 밀리초 단위로 표기

const now = new Date();

// 인스턴스 레벨 함수
// setFullYear: 년도 설정
now.setFullYear(2025);
console.log(now); // 2025-11-22T05:44:44.147Z

// setMonth: 월 설정
now.setMonth(0); // month는 0부터 시작
console.log(now); // 2025-01-22T05:45:36.517Z

// getFullYear: 년도 받아오기
console.log(now.getFullYear()); // 2025

// getMonth: 월 받아오기
console.log(now.getMonth()); // 0

// getDay: 요일 받아오기
console.log(now.getDay()); // 3; 0 일요일 부터, 1... 6 : 토요일

// 시간 분 초 까지 !!

// getTime: 시간 포함해서 다 가져오기
console.log(now.getTime()); // 1737524886397

// toString: date 정보 string으로 변환하기
console.log(now.toString()); // Wed Jan 22 2025 14:48:52 GMT+0900 (Korean Standard Time)

// toDateString: 날짜만
console.log(now.toDateString()); // Wed Jan 22 2025

// toTimeString: 시간만
console.log(now.toTimeString()); // 14:49:44 GMT+0900 (Korean Standard Time)

// toISOString: ISO 8601 형식
console.log(now.toISOString()); // ISO 8601 형식

// toLocaleString: en-US 형식
console.log(now.toLocaleString('en-US')); // 1/22/2025, 2:50:56 PM

// toLocaleString: ko-KR 형식
console.log(now.toLocaleString('ko-KR')); // 2025. 1. 22. 오후 2:51:19
