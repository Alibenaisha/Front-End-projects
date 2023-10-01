

let span = document.querySelector(".up");
// console.log(span);
window.onscroll = ()=>{
console.log(this.scrollY);
this.scrollY>=1000 ? span.classList.add("show"):span.classList.remove("show");

}
span.onclick= ()=>{
    window.scrollTo({
        top : 0,
        behavior:"smooth"
        
    })
}
