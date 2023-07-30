// 단락회로평가
// 왼쪽에서 오른쪽으로 읽는 특성을 이용함
// 뒤의 연산자를 읽지 않아도 연산을 끝내버리는 것.

console.log(false && true);
console.log(true || false);
console.log(!true);

const getName = (person) => {
  //   if (!person) {
  //     return "객체가 아닙니다";
  //   }
  //   return person.name;
  const name = person && person.name; // name 에는 person 이 truthy 하기 때문에 그 뒤에있는 피연산 자인 person.name 의 값을 반환하게됨 -> Karis
  return name || "객체가 아닙니다"; // name 이 Karis 라는 값으로 truthy 하기 때문에, 뒤에 있는 "객체가 아닙니다"까 지 가지 않음 .
};

let person = { name: "Karis" };
const name = getName(person);
console.log(name);

// falsy를 이용해보기

const getAge = (people) => {
  const age = people && people.age; // people 이 falsy 한 값이므로 뒤에 people.age는 읽히지 않는다 그러므로 people의 값인 null을 ager가 그대로반환한다.
  return age || "Nothing at all"; // age의 값이 null -> falsy 이므로 뒤에값까지 봐야한다 그러므로, trutyh 인 "Nothing at all" 을 return 함
};

let people = null;
const age = getAge(people);
console.log(age);
