// includes 내장함수
// 주어진 배열에서 인자로 정한값의 존재여부 확인
const arr = [1, 2, 3, 4];

let number = 3;
// let number = "3";   -> false   그러므로  === 연산자랑 같은것

console.log(arr.includes(number)); // true

//indexOf
// 존재하면 몇번째에 있는지 index 까지 확인하는 내장함수

const arr1 = [1, 2, 3, 4];

let number1 = 3;
let number2 = 5;
console.log(arr.indexOf(number1)); // 2
console.log(arr.indexOf(number2)); // -1    -> 일치하는 인자가 없으면 -1 을 반환한다.

// findIndex
// 배열이 숫자가 아닌 객체타입일 때 쓴다.
// 배열을 순회하면서 맨 처음부터 순서대로 확인을 함
// callback 함수 이용할 것  / elm 은 color : "" 라는 parameter

const arr2 = [
  { color: "red" },
  { color: "black" },
  { color: "blue" },
  { color: "green" },
];

console.log(arr2.findIndex((elm) => elm.color === "green")); // 3

console.log(
  arr2.findIndex((elm) => {
    return elm.color === "red";
  })
);

// 우리가 반환하자는 값에 직접적으로 접근할때
const index = arr2.findIndex((elm) => {
  return elm.color === "blue";
});

// console.log(arr2[index]); //{ color: 'blue' }

// findIndex 대신 Find 를 이용하기
const element = arr2.find((elm) => {
  return elm.color === "blue"; // -> callback 함수는 이조건에 만족하는 첫번째 값을 반환한다
});

console.log(element); // { color: 'blue' }
