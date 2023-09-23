document.body.style.cssText="-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;";
// document.body.ul.style.cssText("-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;");

// Start header
let header = document.createElement('header');
let container = document.createElement('div');
container.className= "container"
container.style.cssText='padding-left: 15px;padding-right: 15px;margin :30px auto ;display: flex; justify-content: space-between; align-items: center;';

let ul = document.createElement('ul');
ul.style.cssText='list-style: none;margin: 0;padding: 0;display: flex;justify-content: space-between;align-items: center; ';

let li = document.createElement('li');
li.textContent="Home"
li.style.marginRight="15px"
ul.appendChild(li)

let li1 = document.createElement('li');
li1.textContent="About"
li1.style.marginRight="15px"

ul.appendChild(li1)

let li2 = document.createElement('li');
li2.textContent="Service"
li2.style.marginRight="15px"

ul.appendChild(li2)

let li3 = document.createElement('li');
li3.textContent="Contact"
li3.style.marginRight="15px"

ul.appendChild(li3)

let logo = document.createElement('div');
logo.textContent= 'Ali'
logo.style.cssText = 'color: #1a7a50; font-size:30px;'

container.appendChild(logo)
container.appendChild(ul)
header.appendChild(container)
document.body.appendChild(header)
// End header
// Start Main
let main = document.createElement('main');
main.style.backgroundColor='#ebebeb'
let container1 = document.createElement('div');
container1.className= "container"
container1.style.cssText='padding-left: 15px;padding-right: 15px; margin :0 auto ;display: flex;flex-wrap: wrap;';
// box
for(let i=1 ; i<=15; i++){
let box = document.createElement('div');
box.className="box"
box.style.cssText='background-color:#fff;width:30% ;display: flex;justify-content: center;flex-direction: column;align-items: center;padding:45px 20px ;margin:5px;'
let num= document.createElement("div")
num.textContent=i
let text= document.createElement("div")
text.textContent="Peoduct"
let box1=


box.appendChild(num)
box.appendChild(text)

container1.appendChild(box)

// container1.appendChild(box1)

main.appendChild(container1)
document.body.appendChild(main)
}
//Start Footer

let footer = document.createElement('footer');
let container2 = document.createElement('div');
let textcopr = document.createElement('div');
container2.textContent= 'Copyright 2021'
container2.style.cssText='display:flex; justify-content: center;align-items: center; color :#fff;background-color:#1a7a50; height:58px ;'


container2.appendChild(textcopr)
footer.appendChild(container2)
document.body.appendChild(footer)