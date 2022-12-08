const writeForm = document.querySelector("#write-form");
let toDoList = [];

writeForm.addEventListener("submit",writeCheck);

function writeCheck(event){
    event.preventDefault();
    const toDo = writeForm.querySelector("input");
    const toDoObj = {
        id : Date.now(),
        content : toDo.value
    };
    paintList(toDoObj);
    toDo.value = "";
}

function saveTodo(toDoObj){
    toDoList.push(toDoObj);
    saveToDoList()
}

function saveToDoList(){
    localStorage.setItem("toDoList",JSON.stringify(toDoList));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    const span = li.querySelector("span");
    toDoList = toDoList.filter(toDo => String(toDo.id) !== span.id);
    li.remove();
    saveToDoList();
}

function paintList(toDoObj){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");
    span.innerText = toDoObj.content;
    span.id = toDoObj.id;
    deleteBtn.innerText = "🗑";
    li.appendChild(span);
    li.appendChild(deleteBtn);
    const List = document.querySelector("#todo-list");
    List.appendChild(li);
    saveTodo(toDoObj);

    deleteBtn.addEventListener("click", deleteToDo);//?
}

if(localStorage.getItem("toDoList") !== null){
    const toDoList = JSON.parse(localStorage.getItem("toDoList"));
    toDoList.forEach(paintList);
}
