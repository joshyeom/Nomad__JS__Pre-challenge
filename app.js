const title = document.querySelector(".hello h1");

function handleTitleClick() {
  console.log("title was clicked");
}

title.addEventListener("click", handleTitleClick); //(1)title was clicked
//function을 추가함으로써, event listner가 click을 감지했을때 handleTitleClick을 자바 스크립트가 실행.
//즉, 나는 직접적으로 function을 실행하지 않고 java script에게 넘겨줌으로써 구현이됨.

function handeleTitleColor() {
  title.style.color = "blue";
}

title.addEventListener("click", handeleTitleColor); //클릭시 파랑색으로 변경됨.
//addEventListnere명령시 무엇을 listen 할 지 적용해주어야 함.
//listner안에 함수에는 ()을 넣으면 안된다. 우리는 함수만 넘겨주고 자바스크립트가 실행하게끔 해야한다.
