let div = document.querySelector("Div");
console.log(div)

function numdown(){
    div.innerHTML -= 1;
    if(div.innerHTML ==='0'){
        clearInterval(com)
        window.open("https://elzero.org","_blank")
    }
    if(div.innerHTML ==='5'){
        window.open("https://elzero.org","_blank","width=400,height=500,left=500,top=50")

    }

}

let com = setInterval(numdown,1000)