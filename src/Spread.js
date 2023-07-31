// spread 연산자 -> ...
// 중복되는 객체의 값을 다른 객체에 펼쳐주는 역할

const cookie = {
  base: "cookie",
  madeIn: "Korea",
};

const chocoCookie = {
  //   base: "cookie",
  //   madeIn: "Korea",
  ...cookie,
  topping: "chocochip",
};
const blueberryCookie = {
  //   base: "cookie",
  //   madeIn: "Korea",
  ...cookie,
  topping: "blueberry",
};
const StrawberryCookie = {
  //   base: "cookie",
  //   madeIn: "Korea",
  ...cookie,
  topping: "strawberry",
};

// [배열에도 가능하다]
const noToppingCookies = ["촉촉한쿠키", "안촉촉한쿠키"];
const toppingCookies = ["바나나쿠키", "블루베리쿠키", "딸기쿠키", "초코칩쿠키"];

// 둘을 합칠때 concat을 사용 해도되지만 ,
const allCookies = [...noToppingCookies, "삽입가능쿠키", ...toppingCookies];
console.log(allCookies);
// [ '촉촉한쿠키', '안촉촉한쿠키', '바나나쿠키', '블루베리쿠키', '딸기쿠키', '초코칩쿠키' ]
// [ '촉촉한쿠키', '안촉촉한쿠키', '삽입가능쿠키', '바나나쿠키', '블루베리쿠키', '딸기쿠키', '초코칩쿠키' ] -> 바로추가가능
