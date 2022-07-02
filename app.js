const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
  h1.className = "active"; //css에서 입력된 class 수정 가능
}
h1.addEventListener("click", handleTitleClick); //첫 클릭은 blue 두 번째 클릭은 tomato

const h2 = document.querySelector(".hello h2");

function switchColor() {
  if (h2.className === "active") {
    //h2.className이 active일 시
    h2.className = ""; //h2.className = ""이 되는거고
  } else {
    //아니면
    h2.className = "active"; //h2.className = "active"이다.
  } //그렇다면 다시 처음부터 시작
} //그렇지만 함수안에 "action" 스트링이 2개여서 실수 및 에러의 위험이 높다.

h2.addEventListener("click", switchColor); //console에서 class("active")사라졌다가 나타났다를 반복 하는것을 볼 수 있다.
