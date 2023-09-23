let add = document.querySelector(".classes-to-add");
let remove = document.querySelector(".classes-to-remove");
let current = document.querySelector(".element-current");
let list = document.querySelector(".classes-list > div ");

window.onload= ()=>{
if(list.textContent===""){
    list.textContent="No Classes To Show"
}else{
    list.textContent=""
}
}

add.addEventListener('blur' ,()=>{
    if(add.value !== ""){
    let textadd = add.value.split(' ')
    list.textContent=""
        for(let i = 0 ; i < textadd.length;i++){
            let  testpush= document.createElement("span");
            testpush.textContent=textadd[i];
            testpush.className=textadd[i];
            list.appendChild(testpush);      
        }
    }
});
current.addEventListener('click',function(){
    if(remove.value !== ""){
        let textremove = remove.value.split(' ')
            for(let i = 0 ; i < textremove.length;i++){
                let sd = document.querySelector(`.${textremove[i]}`);
                sd.remove()
            }
    }
    if(list.textContent === ""){
        list.textContent="No Classes To Show"
    }
});
