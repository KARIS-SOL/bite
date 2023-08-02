// 동기 비동기
// js 가 동작 하는 원리 , 순서
// 동기적방식 -> Single Thread(js 는 무조건 single) :  순서대로 작업이 진행됨, 진행이 순서대로 하게 하기위해 blocking 방식이 이용됨.
//        -> 각각의 task 의 시간이 오래 걸릴경우 문제가 생김
// 비동기방식 -> 여러개의 작업을 동시에 실행시켜서, 먼저 작성된 코드의  결과를 기다리지 않고 다음코드를 바로 실행시킴 -> non-blocking
//         -> 뭐가 먼저 끝났는 지 확인하기위해, callback 함수를 뒤에 붙혀서 표시를 함

//동기적방식
function taskA() {
  console.log("A작업끝");
}

taskA();
console.log("코드끝");

// 비동기식으로 만들기  -> setTimeout(() =>{callback},delayfunction)  -> 2초는 2000
function taskB() {
  setTimeout(() => {
    console.log("이게2초뒤에나와야해");
  }, 2000);
}

taskB();
console.log("이게먼저야");

// 2개의 parameter 받기 , 3초 뒤에 a, b 가 더한값 구하기

function taskC(a, b, cb) {
  // cb = callback
  setTimeout(() => {
    const res = a + b; // res 라는 지역상수에 저장
    cb(res); // setTimeout 함수에서 callback 를 출력   1. callback 함수 출력값을
  }, 3000); // 여긴 3초
}

function taskD(a, cb) {
  setTimeout(() => {
    const res = a * 2;
    cb(res);
  }, 1000); // task C  보다 먼저 출력 됨 1초니깐
}

taskC(3, 4, (res) => {
  // res를 밖에서 사용하려면 callback 함수를 써야함 -> 결과값을 parameter 로 받아서.
  console.log("C TASK RESULT : ", res); // 2. 코드의 흐름을 여기로 전달  -> C TASK RESULT :  7
});

taskD(7, (res) => {
  console.log("D TASK RESULT : ", res);
});

console.log("코드끝 ");
