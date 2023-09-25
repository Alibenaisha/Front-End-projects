let Fontstyle = document.querySelector("#Fontstyle")
let FontColor = document.querySelector("#FontColor")
let Fontsize = document.querySelector("#Fontsize")
let text = document.querySelector("p")
let btn = document.querySelector(".btn")

// console.log(text)
btn.onclick = (e)=>{
    e.preventDefault()
    console.log(Fontstyle.value)
    console.log(FontColor.value)
    console.log(`${Fontsize}px`)
    window.localStorage.setItem("Fontstyle" ,Fontstyle.value)
    window.localStorage.setItem("FontColor" ,FontColor.value)
    window.localStorage.setItem("Fontsize" ,Fontsize.value)

    text.style.color= localStorage.getItem("FontColor")
    text.style.fontSize= `${localStorage.getItem("Fontsize")}px`
    if(localStorage.getItem("Fontstyle")==="Open Sans"){
        text.style.fontFamily= 'Open Sans, sans-serif'
    } else if(localStorage.getItem("Fontstyle")==="Cairo"){
        text.style.fontFamily= 'Cairo, sans-serif'
        
    }else{
        text.style.fontFamily= 'Roboto, sans-serif'
    }
}
console.log()
console.log(localStorage.getItem("Fontstyle"))
text.style.color= localStorage.getItem("FontColor")
text.style.fontSize= `${localStorage.getItem("Fontsize")}px`
if(localStorage.getItem("Fontstyle")==="Open Sans"){
    text.style.fontFamily= 'Open Sans, sans-serif'
} else if(localStorage.getItem("Fontstyle")==="Cairo"){
    text.style.fontFamily= 'Cairo, sans-serif'
    
}else{
    text.style.fontFamily= 'Roboto, sans-serif'
}