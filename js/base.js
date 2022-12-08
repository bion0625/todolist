const body = document.querySelector("body");
const bodyImg = ["a-body","b-body","c-body","d-body","e-body","f-body","g-body","h-body","i-body","j-body","k-body","l-body","m-body","n-body","o-body","p-body","q-body","r-body"];
const bodyNumber = Math.floor(Math.random()*bodyImg.length);
body.className = bodyImg[bodyNumber];

const time = document.querySelector(".time");
timeCheck();
setInterval(timeCheck,1000);


const HIDDEN_KEY = "hidden";

function timeCheck(){
    const date = new Date();
    const h = String(date.getHours()).padStart(2,"0");
    const m = String(date.getMinutes()).padStart(2,"0");
    const s = String(date.getSeconds()).padStart(2,"0");
    time.innerText = `${h}:${m}:${s}`;
}

function loginCheck(event){
    event.preventDefault();
    const newName = document.querySelector("form input").value;
    localStorage.setItem("name", newName);
    nameCheck(newName);
}


const nameForm = document.querySelector("#name-form");

nameForm.addEventListener("submit",loginCheck);



const name = localStorage.getItem("name");

if(name !== null){
    nameCheck(name);
}

function nameCheck(name){
    const hello = document.querySelector("h3");
    hello.classList.remove(HIDDEN_KEY)
    hello.innerText = `hello, ${name}`;
    hello.className = "hello";
    nameForm.classList.add(HIDDEN_KEY);
    todoCheck();
}

function todoCheck(){
    const write = document.querySelector("#write");
    const todoList = document.querySelector("#todo-list");
    write.classList.remove(HIDDEN_KEY);
    todoList.classList.remove(HIDDEN_KEY);
}

