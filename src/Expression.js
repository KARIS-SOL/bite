// 함수 표현식
// 함수를 변수의 값으로 담을 때는 이름을 명시하지 않아도 됨 .
// 호이스팅이 일어나지 않음

let hello = function () {
  return "안녕하세요";
};

// console.log(hello);  [Function: hello]

const helloText = hello();
console.log(helloText); // 안녕하세요
