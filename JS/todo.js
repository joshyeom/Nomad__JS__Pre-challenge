const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); //toDoForm이 선언되어서 바로 querySelector로 선언가능.
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = []; //toDos >> array

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //JSON.stringify는 어떠한 코드든 string으로 변환 또한, string으로 되어서 중복적용도 가능.
}

function deltedToDo(event) {
  //event를 넣지 않으면 모든 eventListner가 같은 명령을 기다리기 때문에 함수가 실행되면 다 지워짐. 이를 방지하기 위해 event로 각 객체의 정보를 받음
  const li = event.target.parentElement; //event의 정보중 target으로 button이 target인것을 알려주고 button의 parent를 확인함으로써 click시 객체를 제대로 알려줌
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span"); //li안에 span이 생성되는 것이 아니기 때문에
  span.innerText = newTodo; //newTodo의 value를 span으로 바꿔서 텍스트로 넣어주기
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deltedToDo);
  li.appendChild(span); //appendChild로 span을 li에 넣어주기
  li.appendChild(button);
  toDoList.appendChild(li); //ul에 appendChild로 넣어주기
}

function handleToDoSubmint(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; //input의 현재 value를 새로운 변수에 복사
  toDoInput.value = "";
  toDos.push(newTodo); //새로운 value를 toDos array에 push.
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmint);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  //일치 하지 않다면
  const parsedToDos = JSON.parse(savedToDos); //string을 object로 바꿔줌
  parsedToDos.forEach((item) => console.log("this is the turn of", item)); //각각의 item을 실행해줌.
}
