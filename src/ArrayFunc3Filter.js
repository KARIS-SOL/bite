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
