const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); //toDoForm이 선언되어서 바로 querySelector로 선언가능.
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; //toDos >> array //빈 array로 지정되어있어서 refresh하게 되면 기록들이 사라짐
//정확히는 사라진다는 것보다, 빈 상태로 시작. 그래서 나중에 재할당이 가능하게끔 let으로 바꿔줌.

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //JSON.stringify는 어떠한 코드든 string으로 변환 또한, string으로 되어서 중복적용도 가능.
}

function deltedToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span"); //li안에 span이 생성되는 것이 아니기 때문에
  span.innerText = newTodo.text; //newTodo의 value를 span으로 바꿔서 텍스트로 넣어주기
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deltedToDo);
  li.appendChild(span); //appendChild로 span을 li에 넣어주기
  li.appendChild(button);
  toDoList.appendChild(li); //ul에 appendChild로 넣어주기
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; //input의 현재 value를 새로운 변수에 복사
  toDoInput.value = "";
  const newTodoObj = {
    //오브젝트로 저장되게끔 선언
    text: newTodo,
    id: Date.now(),
  }; //Date.now는 지금 현재 정확한 미세 초 단위까지 출력해주기 때문에, 랜덤하고 고유한 id가 필요할때 적합하다.
  toDos.push(newTodoObj); //새로운 value를 toDos array에 push.
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  //일치 하지 않다면
  const parsedToDos = JSON.parse(savedToDos); //string을 object로 바꿔줌
  toDos = parsedToDos; //위에 toDos는 let으로 선언되었기 때문에 재할당 가능.
  parsedToDos.forEach(paintToDo); //각각의 item을 실행해줌.
}
