console.log("--------------Q1--------------")
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let prant = mix.map((ele)=>{
  return isNaN(parseInt(ele))? ele:"" ;
} ).reduce((ele,ara)=>{
  return `${ele}${ara}`
} ) 
console.log(prant)
// Elzero
console.log("--------------Q2--------------")
let myString = "EElllzzzzzzzeroo";
let myelz = myString.split("").filter((ele,int)=>{
  return myString.indexOf(ele)===int
} ).join("")
console.log(myelz)
// Elzero

console.log("--------------Q3--------------")
let myArray = ["E", "l", "z", ["e", "r"], "o"];
let x1 =myArray.reduce((ele,ala)=>{
  return ele.concat(ala)
},[] ).join("")
console.log(x1)
// Elzero
console.log("--------------Q4--------------")
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let sun= numsAndStrings.filter((ele)=>{
  return !isNaN(parseInt(ele));
} ).map((ele)=>{
  return -ele;
})
// [-1, -10, 10, 20, -5, -3]
console.log(sun)

console.log("--------------Q5--------------")
let nums = [2, 12, 11, 5, 10, 1, 99];
let sum= nums.reduce((ele,ala)=>{
  return ala %2===0 ? ele*ala:ele+ala;
},1)
console.log(sum)
// 500