const title = document.getElementById("title");
//HTML의 ID element를 꺼내옴//
console.dir(title); //h1#title.hello   ariaAtomic: null  ariaAutoComplete: null..........
console.log(title); //<h1 autofocus="" class="hello" id="title">Grab Me!</h1>
//dir은 객체의 속성을 출력
//log는 객체의 코드를 출력

title.innerText = "Got You!"; //Grab Me! > Got You!
//굳이 JS로 element를 변경 및 가져오는 이유
//html 은 정적 리소스 입니다. 사용자에게 표시할 화면을 html로 만들면 그걸로 변경할 수 없는 상태가 됩니다. 그런데, 그런 결과 화면을 상황에 따라 변경하는게 필요해 졌고, 그걸 가능하게 하는게 javascript 인 겁니다.
//예를들어, title이 '환영합니다.' 로 만들어졌는데, 화면에서 선택하는 사용자의 이름을 표시하려 한다면, 사용자가 보고있는 화면(html)에서 선택한 이름을 추가로 표시할 수 있게 하는거죠. 그래서 '홍길동님 환영합니다.' 로 html 정보를 바꿀때 사용합니다.
console.log(title.id); //title
console.log(title.className); //hello
//이로써 html에서 JS로 html을 수정,확인,출력이 가능하다는것을 알았다.
