let img = document.getElementsByTagName("img")


for(let i=0 ; i<img.length;i++){
img[i].setAttribute("src","https://elzero.org/wp-content/themes/elzero/imgs/logo.png")
img[i].setAttribute("alt","Elzero Logo")
}
console.log(document.body)