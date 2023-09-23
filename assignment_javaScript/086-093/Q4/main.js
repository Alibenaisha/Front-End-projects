// let divOne= document.getElementsByClassName('one')
// let divTwo= document.getElementsByClassName('two')
let divOne= document.querySelector('[class="one"]');
let divTwo= document.querySelector('[class="two"]');
let div= document.getElementsByTagName('div');
let textOne = divTwo.textContent
let textTwo = divOne.textContent


divOne.setAttribute('title',textOne.toLocaleLowerCase());
divTwo.setAttribute('title',textTwo.toLocaleLowerCase());

divOne.textContent=textOne
divTwo.textContent=textTwo+" "+div.length
console.log(document.body);