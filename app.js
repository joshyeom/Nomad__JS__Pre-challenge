const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
  h1.innerText = "mouse is here!";
}

h1.onmouseenter = handleTitleClick;
//addEventListner를 사용하지않고 이렇게도 사용할 수 있다.
//그러나, addEventListner를 사용하는것이 더 가독성이 좋고 후에 .removeEvnetLisnter를 사용할 수 있으므로, addEventListner를 사용하자!

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
window.addEventListener("resize", handleWindowResize);
//브라우저 사이즈를 늘이거나 줄이면 tomato로 바뀜.
//console에서 document.body를 입력하면 바뀐값이 출력됨.

function handleWindowCopy() {
  alert("copier!");
}
window.addEventListener("copy", handleWindowCopy); //copy시 알람

function handleWindowOffline() {
  alert("Check your WI-FI");
}
window.addEventListener("offline", handleWindowOffline); //오프라인 시 알람
