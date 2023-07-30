// 삼항연산자

let a = 3;
if (a >= 0) {
  console.log("양수");
} else {
  console.log("음수");
}

let b = 5;
b >= 0 ? console.log("양수") : console.log("음수");

// 배열이 빈배열 인지 아닌 지 확인
let c = [1, 2, 3];
if (c.length === 0) {
  console.log("빈 배열");
} else {
  console.log("안빈배열");
}

c.length === 0 ? console.log("빈배열") : console.log("안빈배열");

// 값이 True 인지 False 인지를 확인해서 return. => arrayStatus 배열 상태

const arrayStatus = c.length === 0 ? "빈배열" : "안빈배열";
console.log(arrayStatus);

// 주어진 값이 null 인지 undefined 인지 판단하는 조건문 만들기 with  삼항연산자

let d = [];
const result = d ? true : false;
console.log(result);

// 중첩 삼항 연산자  but, 가독성이 떨어지므로 if 조건문으로 쓰는 게 낫다.
// todo : 확장 계산 프로그램
// 90점 이상 A+
// 50점 이상 B+
// 그외 F

let score = 40;
// score >= 90
//   ? console.log("A+")
//   : score >= 50
//   ? console.log("B+")
//   : console.log("F");

if (score >= 90) {
  console.log("A+");
} else if (score >= 50) {
  console.log("B+");
} else {
  console.log("F");
}
