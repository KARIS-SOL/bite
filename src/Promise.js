function isPositive(number, resolve, reject) {
  setTimeout(() => {
    //숫자형 타입이 맞다면 okay 아니면 실패
    if (typeof number === "number") {
      // 성공 -> resolve 콜백함수로 호출
      resolve(number >= 0 ? "양수" : "음수");
    } else {
      // 실패 -> reject 콜백 함수로 호출
      reject("주어진 값이 숫자형 값이 아닙니다 ");
    }
  }, 2000);
}

// isPositiveP 함수에서 executor 함수 실행시키기

function isPositiveP(number) {
  const executor = (resolve, reject) => {
    // executor 함수 : 비동기함수를 실제로 실행하는 함수
    setTimeout(() => {
      if (typeof number === "number") {
        // 성공 -> resolve 콜백함수로 호출
        resolve(number >= 0 ? "양수" : "음수");
      } else {
        // 실패 -> reject 콜백 함수로 호출
        reject("주어진 값이 숫자형 값이 아닙니다 ");
      }
    }, 2000);
  };
  // promise 로 executor 함수 실행시키기
  const asyncTask = new Promise(executor);
}
