//Uncaught TypeError: Cannot set properties of null (setting 'innerText')
//코드내의 어떤 값이 null이라는 에러
const title = document.getElementsByTagName("h1");
console.log(title); //HTMLCollection [h1]0: h1length: 1[[Prototype]]: HTMLCollection

const selector = document.querySelector(".hello h1");
console.log(selector); //<h1>Grab me!</h1>
//querySelector로 보다 펀하고 쿨하고 섹시하게 파일값을 출력할 수 있다.
//중복되는 태그가 있다면 첫 번째 요소만 가져온다.
//다 가져오고 싶으면 .querySelectorAll 을 사용

const selector = document.getElementsByClassName("hello");
const selector = document.querySelector(".hello");
//이 두 코드의 출력값은 같다.

const selector = document.getElementById("hello");
const selector = document.querySelector("#hello");
//이 두개도 같다.
//하지만, querySelector만 하위요소를 가져올 수 있어 이것이 더 펀쿨섹이다.
