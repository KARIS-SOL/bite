// 주어진 문자열이 한식 종류에 해당하는지 확인하는 조건문

// 함수선언문
// function isKoreanFood(food) {
//   if (food === "불고기" || food === "비빔밥" || food === "떡볶이") {
//     return true;
//   }
//   return false;
// }

// const food1 = isKoreanFood("불고기");
// const food2 = isKoreanFood("pasta");
// console.log(food1);
// console.log(food2);

// 하지만 이렇게 하면 모든 한식을 확인 할 수 없다. -> switch 도 길어짐. -> 문자열로 이뤄진 한식들 중에 입력받은 parameter의 존재유무확인하면됨.
// .includes -> 특정문자열이 있는지 확인

function isKoreanFood(food) {
  if (["비빔밥", "떡볶이", "불고기"].includes(food)) {
    return true;
  }
  return false;
}

// 주어진 값에 따라서 각각 다른 결과를 도출 하는 함수만들기
// 한식인지, 중식인지, 양식인지 각각 확인 후 그에대한 대표메뉴를 return

// const getMeal = (mealType) => {
//   if (mealType === "한식") return "불고기";
//   if (mealType === "중식") return "멘보샤";
//   if (mealType === "양식") return "파스타";
//   if (mealType === "일식") return "초밥";
//   return "굶기";
// };

// console.log(getMeal("한식"));
// console.log(getMeal("중식"));
// console.log(getMeal("양식"));
// console.log(getMeal("일식"));

// but, 존재하는 모든국가를 다표기해야한다고 하면 너무 어려운문제! -> 객체 property에 접근 하는 괄호표기법으로 풀어보자
// 괄호 표기법 : 객체의 이름 뒤에 대괄호 [ ]를 써주고 안에 key를 넣어주면 그 key에 해당하는 value값이 출력된다
// meal 이라는 객체를 이용하자

const meal = {
  // 3. meal 이라는 객체에서 "한식" 이라는 key 를 갖는 값을 가져오는것
  한식: "불고기",
  중식: "멘보샤",
  일식: "초밥",
  양식: "파스타",
  인도: "커리",
};

const getMeal = (mealType) => {
  // 2. mealType의 "한식" 을 전달했기 때문에
  return meal[mealType] || "굶기"; // 4. key 를 가져와서 "불고기" 를 return 하게 된다.
};

console.log(getMeal("한식")); // 1. getmeal 함수를 호출할때,
console.log(getMeal(""));
