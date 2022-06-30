const age = parseInt(prompt("How old are you?")); //function은 안쪽부터 실행됨 즉 prompt부터 시작
//prompt 요즘 잘 안씀. css적용 안되고 블락당할수도 있음.
console.log(age);
//parseInt로 인해 prompt에서 number과 string을 구분 할 수 있게 됨.
if (isNaN(age) || age < 0) {
  //is not a number. string일때 true.
  console.log("Please write a real positive number");
} else if (age < 18) {
  console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
  console.log("You can drink Enjoy!!");
} else if (age > 50 && age <= 80) {
  console.log("You should stop to drink");
} else if (age > 80) {
  console.log("You can do whatever you want.");
}
//if = true > 작동
//if = false > else 작동
//if = false > else if = false > else if = true > 작동
//true일 경우 작동하고 false 일 경우는 작동하지 않거나, 다음 conditionals로 이동
true || true === true;
false || true === true;
true || false === true;
false || false === false;
//or은 false false일경우만 false

true && true === true;
false && true === false;
true && false === false;
false && false === false;
//and는 true true 일 경우만 true

//= --> value를 할당
//=== --> 같은지 확인
//!== --> 같지 않음을 확인
