// boolean 값을 넣지 않아도 참이나 거짓으로 받아지는 js 속성값들
// 참이아니여도 참을 받아들여지고, 거짓이 아니여도 거짓으로 받아들여지는 값들

let a = ""; // FALSE   -> null, undefined, 숫자 0 , -0 , NaN , ""

if (a) {
  console.log("TRUE");
} else {
  console.log("FALSE");
}

let b = "string"; // TRUE   ->  [] , {} , numbers , 문자열 , Infinity

if (b) {
  console.log("TRUE");
} else {
  console.log("FALSE");
}

// 객체를 매개변수로 받아서, 받은 객체에서 특정한 property를 반환하는 프로그램 만들기
// 여기서 특정한 객체 = parameter = person
// person 즉, 사람이란 객체에는 사람이라는 속성이 있으므로 person.name 을 return 한다
// 객체 만들어주기 let person
// getName 을 받는 값을 name 이라는 상수에 저장.
// getName 이라는 함수에 전달하는 person 이라는 parameter 가  name 이라는 property 를 갖고있는 객체를 전달해서  "백진솔" 이 찍힘

// const getName = (person) => {
//   return person.name;
// };

// let person = { name: "백진솔" };
// const name = getName(person);
// console.log(name); // 백진솔

// person 값을  undefined 일 때 예외 처리 하기.
// undefined 는 객체가 아니기 때문에, 내부에 접근 할 수가 없다. 그말은 person.name 으로 접근이 안된다는것.
// 즉, 조건문을 통해서 우리가 전달받은 parameter 가 객체인지, undefined 이 아닌지, null 이 아닌지 판단해야함 .

const getName = (person) => {
  if (person === undefined || person === null) {
    return "객체가 아닙니다 ";
    // let person; 이 undefined 이므로 여기서 TRUE로 작용해서 -> "객체가 아닙니다"가 return 됨.
  }
  return person.name; // 여기까지 도달하지 않으므로, error를 막을 수 있다.
};

let person = null; // let person; 은 undefined
const name = getName(person);
console.log(name); // 백진솔

// 조건문으로 매번 예외 처리하는 것은 힘드므로, ! not 을 이용 할 것.

const getName = (person) => {
  if (!person) {
    // null 과 undefined 는 애초에 falsy 이므로 여기서 ! not 을 붙혀주면 -> TRUE 가 됨.
    return "객체가 아닙니다 ";
  }
  return person.name; // 여기까지 도달하지 않으므로, error를 막을 수 있다.
};

let person = null; // let person; 은 undefined
const name = getName(person);
console.log(name); // 백진솔
