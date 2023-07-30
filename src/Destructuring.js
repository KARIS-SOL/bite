// Destructuring assignment : 비 구조화 할당(구조분해할당)  -> 배열과 객체를 더 우아하게 사용하는 방법

// [배열의 비구조 할당 ]
let arr = ["one", "two", "three"];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];
// 이것을 한줄로 줄이는게 배열의 구조분해 할당
// 대괄호를 이용해서 배열의 값을 순서대로 할당받아서 사용할 수 있게 하는것

// let [one, two, three] = arr; // 배열안에 변수 세개를 선언하고, 오른쪽에는 배열을 할당 해주면, index 0,1,2 를 각각에 할당해라 라는 뜻
// console.log(one, two, three);
//one two three

// let [one, two, three] = ["one", "two", "three"]; // 이렇게도 쓸 수 있다.
// console.log(one, two, three);

// 두개의 변수를 바꾸는 swap 에 적용하기
// tmp 라는 임시변수를 사용할 수 있다
let a = 10;
let b = 25;

// let tmp = 0;

// tmp = a;
// a = b;
// b = tmp;
// console.log(a, b); // 25 10

// 이걸 줄여보자
[a, b] = [b, a]; // [b ,a]  라는 건 이안에 0번 1번 index 를 [a, b]에 할당 한것
console.log(a, b); // 25 10

// [객체의 비구조 할당 ]
// index 가 아닌 key 값으로 할당 한다. -> 순서가 상관없음 ex) name 부분

let object = { one: "하나", two: "둘", three: "셋", name: "Karis" };

// let one = object["one"];
// let two = object.two;
// let three = object.three;

// 비구조할당으로 줄이기
let { name: myName, one, two, three, abc = "four" } = object;
// 여기서 변수명을 바꿀 수 도 있음 -> name 이라는 key 값을 기준으로 value를 myName 이란 변수에 할당
// 그냥 abc 만 할경우 -> undefined 그러므로, abc = "four" 이게 defalut 값임

console.log(one, two, three, myName, abc); // 하나 둘 셋 Karis four
