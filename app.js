//function 계속 반복해서 사용할 수 있는 코드 조각
function sayHello() {
  console.log("Hello!");
}
sayHello();
//Hello!
//실행버튼만 누른 것

function personInfo(nameOfPerson, age) {
  console.log(nameOfPerson);
}
personInfo("nico", 10);
//nico, 10
//personOfInfo function을 만들고 nameOfPerson과 age라는 argument를 갖고있다.

function selfIntroduce(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}
selfIntroduce("nico", 10);
//Hello my name is nico and I'm 10

///////////Let's make some calculatores!//////
function plus(a, b) {
  console.log(a + b);
}
plus(8, 60);
//68
function divide(a, b) {
  console.log(a / b);
}
divide(8, 4);
//2

//const먼저 하고 function
const player = {
  name: "nico",
  sayHi: function (otherPersonsName) {
    console.log("hi! " + otherPersonsName + " nice to meet you!");
  },
};
console.log(player.name);
player.sayHi("lynn");
//hi! lynn nice to meet you!

//()은 실행코드
//
