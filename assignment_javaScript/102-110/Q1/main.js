let txt = prompt("Print Number From – To","Example: 5-20");


let num = txt.split("-");
console.log( +num[0]);
console.log( +num[1]);
// let x,y;
if(num[0]>num[1]){
     
    for(let i=+num[0]; i <= +num[1] ;i++){
        console.log(i)
    }
    
    
}else{
    
    for(let i=+num[1]; i <= +num[0] ;i++){
        console.log(i)
    }
    
    
}
// console.log('x  ===> '+x+'     y  ===> '+y)
