// 함수 선언식
// 함수 호이스팅이 일어남
function getSquare(width, height) {
  // width 와 height 가 매개변수 parameter
  let square = width * height;
  return square;
}

let square1 = getSquare(10, 20);
console.log("square1 : ", square1);
console.log("함수가 실행되었습니다");
console.log(square1);
