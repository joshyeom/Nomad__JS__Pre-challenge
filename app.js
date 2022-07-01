const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
  const currentColor = h1.style.color; //현재상태의 색깔 값을 currentColor에 저장
  let newColor; //newColor라는 새 변수 선언
  if (currentColor === "blue") {
    //currentColor가 blue인지 확인
    newColor = "tomato"; //newColor = "tomato"라는 데이터값이 저장
  } else {
    newColor = "blue"; //currentColor === "blue"가 false 일경우 newColor는 blue
  }
  h1.style.color = newColor; //newColor는 if문에서 tomato를 할당받았기 때문에 newColor = "tomato" = h1.style.color
  //h1.style.color = "tomato" = currentColor
  //if에서 currentColor는 "tomato"라 false
  //else에 따라 newColor="blue"
  //그러므로 처음 값은 blue
}

h1.addEventListener("click", handleTitleClick); //첫 클릭은 blue 두 번째 클릭은 tomato
