const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
  const clickedClass = "clicked"; //string남발로 인한 실수와 에러를 최소화 하는 방법을 const로 선언해버리는것
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
}
h1.addEventListener("click", handleTitleClick); //add와 remove로 인해 class가 생성되었다 지워졌다 하는것을 볼 수 있다.

function handleTitleClick() {
  h1.classList.toggle("clicked");
}
//위 다섯줄짜리 코드와 정확한 의미와 값을 가지고 있음
//즉, toggle은 class가 존재한다면 빼주고 없다면 넣어주는 역할을 함.
