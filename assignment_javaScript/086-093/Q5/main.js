let img = document.getElementsByTagName("img");

for(let i=0;i<img.length;i++){
if(img[i].hasAttribute('alt')){
    img[i].setAttribute('alt','Old');
}else{
    img[i].setAttribute('alt','Elzero New');
}
}
console.log(document.body);