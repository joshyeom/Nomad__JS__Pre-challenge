const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a"); //anchor의 기본 기능은 새 페이지로 접속

function handleLinkClick(event) {
  event.preventDefault();
  console.log(event);
  alert("clicked!");
}
//PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
//argument를 할당한 순간, "click"의 대한 정보가 뜸.
//
link.addEventListener(
  "click",
  handleLinkClick //나는 함수의 이름만 준것, 실행은 JS의 몫//
);

//handleLinkClick({information about the event that just happened!})
