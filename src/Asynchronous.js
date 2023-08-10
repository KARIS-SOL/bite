function taskA(a, b, cb) {
  // cb = callback
  setTimeout(() => {
    const res = a + b; // res 라는 지역상수에 저장
    cb(res); // setTimeout 함수에서 callback 를 출력   1. callback 함수 출력값을
  }, 3000); // 여긴 3초
}

function taskB(a, cb) {
  setTimeout(() => {
    const res = a * 2;
    cb(res);
  }, 1000); // task C  보다 먼저 출력 됨 1초니깐
}

function taskC(a, cb) {
  setTimeout(() => {
    const res = a * -1;
    cb(res);
  }, 2000);
}

taskA(4, 5, (a_res) => {
  // a 함수의 결과를 a_res
  console.log("A RESULT : ", a_res);
  taskB(a_res, (b_res) => {
    console.log("B RESULT : ", b_res); // taskA 에서 a + b 의 값을 taksB의 인자로 넣어봄
    // 그다음 B 에서 나온 결과값을 C 에 넣기
    taskC(b_res, (c_res) => {
      console.log("C RESULT : ", c_res);
    });
  });
});

console.log("코드끝 ");
// 코드끝
// 3초뒤 A RESULT: 9
// 1초뒤 B RESULT : 18
// 2초뒤 C RESULT : -18
