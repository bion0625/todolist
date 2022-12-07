const body = document.querySelector("body");
const bodyNumber = Math.floor(Math.random()*3);
const bodyImg = ["one-body","two-body","three-body"];

body.className = bodyImg[bodyNumber];


const nameForm = document.querySelector("#nameForm");

nameForm.addEventListener("submit","onLogin");
function onLogin(event){
    console.log(event);
}