const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //string만 있거나, 중요한 선언은 대문자로만

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME); //함수 실행시 "hidden"이 추가
  console.log(username);
  greeting.innerText = "Hello " + username; //위아래는 같은 값을 가져옴
  greeting.innerText = `Hello ${username}`; // ``(백틱)사용, ${}를 제외한 값은 출력을 안함.
  greeting.classList.remove(HIDDEN_CLASSNAME); //함수 실행시 "hidden"이 제거
}

loginForm.addEventListener("submit", onLoginSubmit);
//form은 사라지고 value를 받음
