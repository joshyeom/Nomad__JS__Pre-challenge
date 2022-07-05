const clock = document.querySelector("h2#clock");

function sayHello() {
  console.log("hello");
}

setInterval(sayHello, 5000);
//정해진 시간마다 함수를 반복 실행시켜줌
//(함수, ms ex.5000 = 5s)

setTimeout(sayHello, 5000);
//정해진 시간뒤에 함수를 실행시켜줌
//(함수, ms ex.5000 = 5s)

function getClock() {
  const date = new Date(); //브라우저에서 제공하는 사용자의 정확한시간
  const hours = String(date.getHours()).padStart(2, "0"); //String으로 number을 string으로 바꿔주기
  const minutes = String(date.getMinutes()).padStart(2, "0"); //padStart(x글자수 만큼 바꿔주고, 부족하면"이걸로"채워줘);
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
} //:는 그냥 string
//innerText로 웹페이지에 바로 보이게 해줌

getClock(); //setInterveal만 하면 1초이따가 실행되기 때문에 바로 함수실행
setInterval(getClock, 1000);
