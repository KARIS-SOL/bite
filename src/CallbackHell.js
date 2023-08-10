// 콜백지옥에서 Promise 로 구하기
// 비동기 작업이 가질 수 있는 3가지 상태 : Pending(대기상태)-> Fulfilled (resolve) or Rejected (reject)

// 2초뒤에 전달받은 값이 양수인지 음수인지 알려주는 함수
// 어떤숫자를 판단할지를 알아야하므로 number 를 parameter(인자)로 받아야함

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

// isPositive(number, resolve, reject) 이기 때문에 함수호출도 같이 만들어줘야함
isPositive(
  [],
  (res) => {
    console.log("성공적으로 수행됨 : ", res);
  },
  (err) => {
    console.log("실패 하였음 : ", err);
  }
);
