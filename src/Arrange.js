// for 문 in 배열

const arr = ["a", "b", "c"];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// i = 0    ->  배열의 index 는 0 부터 시작
// i < arr.lenght   ->  배열의 길이자체는 3이지만 index 가 0 1 2 이므로, lenght 의 -1 이 길이임.

// 객체 반환 후 반복문 만들기

let person = {
  name: "백진솔",
  age: 32,
  tall: 164,
};

const personKeys = Object.keys(person);
console.log(person);

for (let i = 0; i < personKeys.length; i++) {
  //   console.log(personKeys[i]);

  const curKey = personKeys[i];
  const curValue = person[curKey];

  console.log(`${curKey} : ${curValue}`);
}

// values 만 받기

const personValues = Object.values(person);

for (let i = 0; i < personValues.length; i++) {
  console.log(personValues[i]);
}
