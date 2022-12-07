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
    hello.classList.remove("hidden")
    hello.innerText = `hello, ${name}`;
    hello.className = "hello";
    nameForm.classList.add("hidden");
}

