const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit() {
  const username = loginInput.value;
  console.log("username");
}

loginForm.addEventListener("submit", onLoginSubmit);
//form에는 submit할때 자동으로 refresh되는 기능이 있다.
//여기까지는 value값을 받도록 코딩되어 있지만, 받자마자 refresh 되어버림
//그래서 우리는 이 기능을 초기화를 해야함

function onLoginSubmit(event) {
  //event라는 arugment를 object로 생성
  event.preventDefault(); //브라우저가 기본 동작을 실행하지 못하게 막기
  console.log(loginInput.value);
}
