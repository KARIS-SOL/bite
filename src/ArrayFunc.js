// 배열 내장 함수
// for each 문
// 배열의 모든 요소를 한번씩 순회할 수 있게 하는 내장함수
// 하나하나의 요소를 foreach 메서드 안에 전달하는 call back 함수에 한번씩 전달을 parameter 로 해주는것
// 그러므로 callback 함수 (elm)을 배열안의 1, 2, 3, 4 에 돌아가면서 적용하는 것 *2 를 하면 1 을 한번받고, 2를 한번 받고, 3을 한번받고 등등...

const arr = [1, 2, 3, 4];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for each 문으로 변환 하기

// arr1.forEach(function (elm) {
//     console.log(elm);
// })

const arr1 = [1, 2, 3, 4];
arr1.forEach((elm) => console.log(elm * 2));
// 2
// 4
// 6
// 8

// but, 여기선 console.log 로 단지 출력을 한것 뿐이지 배열전체에 2배를 한 상수를 배열로 저장한것 이 아니다 .

const newArr = []; // 여기에 모든 값에 * 2 를 한 값의 배열을 넣자 !
arr1.forEach(function (elm) {
  newArr.push(elm * 2);
});

console.log(newArr); // [2, 4, 6, 8] -> 배열

// 더쉽게 만들기 위해서 'map' 함수를 이용하자 !
// map 은 callback 함수에서 return 을 할 수 있다.
// 원본배열 [1, 2, 3, 4] 를 모두 순회 하면서, 연산을 해서 return 되는 값들을 따로 배열로 추려내서 반환을 할 수 있게 하는 함수.

const newArr1 = arr1.map((elm) => {
  return elm * 2;
});

console.log(newArr1); // [ 2, 4, 6, 8 ] -> 배열
