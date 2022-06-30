//retrun
//집에 믹서가있는데, 망고를 갈아서 주스로 만들었지만, 주스를 꺼내지 못할 때, return을 쓴다.
//이래도 뭔 개 소린지 모르겠음

//return은 2가지 기능이 있는데,
//하나는 함수로부터 데이터를 변환하는역할을 하는 것이고
const age = 96;
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge); //98

//두번째는 함수를 강제로 종료시키는 역할도 한다.
const hello = "hello";
function sayHello() {
  "hello!";
  return;
  ("bye bye");
}

console.log(hello); //hello
//byebye는 return이후 즉, 함수가 종료된 이후라 출력되지 않음.
