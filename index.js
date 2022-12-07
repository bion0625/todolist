const body = document.querySelector("body");
const bodyNumber = Math.floor(Math.random()*3);
const bodyImg = ["one-body","two-body","three-body"];
body.className = bodyImg[bodyNumber];

const time = document.querySelector(".time");
timeCheck();
setInterval(timeCheck,1000);
function timeCheck(){
    const date = new Date();
    const h = String(date.getHours()).padStart(2,"0");
    const m = String(date.getMinutes()).padStart(2,"0");
    const s = String(date.getSeconds()).padStart(2,"0");
    time.innerText = `${h}:${m}:${s}`;
}


const nameForm = document.querySelector("#name-form");

nameForm.addEventListener("submit",nameCheck);
function nameCheck(event){
    event.preventDefault();
    const name = document.querySelector("form input").value;
    localStorage.setItem("name", name);
    nameCheck();
}

const name = localStorage.getItem("name");
if(name !== null){
    nameCheck();
}

function nameCheck(){
    const hello = document.createElement("h3");
    hello.innerText = `hello, ${name}`;
    hello.className = "hello";
    body.appendChild(hello);
    nameForm.classList.add("hidden");
}
