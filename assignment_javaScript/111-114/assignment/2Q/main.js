let fname= document.querySelector(".fname")
let lname= document.querySelector(".lname")
let email= document.querySelector(".email")
let aja = document.querySelector("#aja")
let btn = document.querySelector('button');
btn.onclick = (e)=>{
    e.preventDefault();
    window.sessionStorage.setItem("fname", fname.value);
    window.sessionStorage.setItem("lname", lname.value);
    window.sessionStorage.setItem("email", email.value);
    // window.sessionStorage.setItem(``,document.querySelector(`option[value = "${sessionStorage.aja}"]`));
}

fname.setAttribute("value", window.sessionStorage.getItem("fname"))
lname.setAttribute("value", window.sessionStorage.getItem("lname"))
email.setAttribute("value", window.sessionStorage.getItem("email"))
aja.value = window.sessionStorage.getItem("select");

aja.onchange = function () {
    window.sessionStorage.setItem("select", aja.value);
  };