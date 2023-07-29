const arr = [
  { num: 1, color: "red" },
  { num: 2, color: "black" },
  { num: 3, color: "blue" },
  { num: 4, color: "green" },
  { num: 5, color: "blue" },
];

//배열 filtering  -> 배열에서 찾은 값을 배열로 반환 받고 싶을 때 쓰는 "filter"
console.log(arr.filter((elm) => elm.color === "blue"));
// [ { num: 3, color: 'blue' }, { num: 5, color: 'blue' } ]

// 배열 자르기  -> index 의 순서로 자르기  (begin, end)
console.log(arr.slice(0, 2));
//[ { num: 1, color: 'red' }, { num: 2, color: 'black' } ]   -> 0 번부터 0 1 2 - 1

console.log(arr.slice(1, 4)); // 1번부터 1 2 3 4 - 1 이니깐 3번째까지
// [
//     { num: 2, color: 'black' },
//     { num: 3, color: 'blue' },
//     { num: 4, color: 'green' }
//   ]

// 자르고 붙히기   -> concat
const arr1 = [
  { num: 1, color: "red" },
  { num: 2, color: "black" },
  { num: 3, color: "blue" },
];

const arr2 = [
  { num: 4, color: "green" },
  { num: 5, color: "blue" },
];

console.log(arr1.concat(arr2));
// [
//     { num: 1, color: 'red' },
//     { num: 2, color: 'black' },
//     { num: 3, color: 'blue' },
//     { num: 4, color: 'green' },
//     { num: 5, color: 'blue' }
//   ]

// 배열 정렬
// sort -> 원본 배열 정렬   -> 문자열 기준 사전식

let chars = ["나", "다", "가"];

chars.sort();

console.log(chars); // [ '가', '나', '다' ]

// 숫자는 비교함수가 필요함
// 오름차순으로 정렬하기   -> 내림차순은 1 과 -1 이 바뀌면 됨
let numbers = [1, 3, 5, 2, 7, 0, 20, 30, 25];

const compare = (a, b) => {
  //우리에게 필요한것은 ->  같다, 크다, 작다
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
};

numbers.sort(compare);

console.log(numbers);
// [0,  1,  2,  3, 5,
//   7, 20, 25, 30
// ]

// 배열내의 모든 것들을 문자열로 합치는 method  ->  join
const arr3 = ["진솔", "님", "환영합니다", "어서오세요"];

console.log(arr3.join(" "));
//진솔 님 환영합니다 어서오세요

console.log(arr3.join("예쁜"));
//진솔예쁜님예쁜환영합니다예쁜어서오세요
