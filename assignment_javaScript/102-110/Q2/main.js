let box = document.querySelector(".box")
let clos = document.querySelector(".x")
setTimeout(function(){
    box.style.display = "block";
},5000);
clos.onclick  = ()=>{
    box.style.display = "none"
}