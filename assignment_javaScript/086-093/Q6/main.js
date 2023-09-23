let number = document.querySelector('[type="number"]');
let text1 = document.querySelector('[type="text"]');
let type = document.querySelector('[name="type"]');
let botton = document.querySelector('[type="submit"]');
let show = document.querySelector('.results');


document.forms[0].onsubmit = (e) =>{
    e.preventDefault()
    if(number.value !== "" || text1.value !== ""){
        show.innerHTML=""
        for(let i = 0 ; i<number.value ;i++){
        let add = document.createElement(type.value)
        add.className= "box";
        add.title= "Element";
        add.id= `id-${i}`;
        let text = document.createTextNode(text1.value)
        
        if(type.value==="Div"){
        add.appendChild(text)
        show.setAttribute("style","display: flex;flex-wrap: wrap;width: 678px;")
        show.appendChild(add)
        }else{
            add.appendChild(text)
            show.setAttribute("style","display: flex;flex-wrap: wrap ; justify-content: space-between ;width: 678px;")
            show.appendChild(add)
        }
        }
    }
}
console.log(document.body)