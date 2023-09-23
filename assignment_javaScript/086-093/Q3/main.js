let number = document.querySelector('[name="dollar"]')
let text = document.querySelector('[class="result"]')

number.oninput = ()=>{
    text.textContent=`{${(number.value)}} USD Dollar = {${(number.value*15.6).toFixed(2)}} Egyptian Pound`
}

