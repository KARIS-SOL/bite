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
