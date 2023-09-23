let names = function (...name) {return `String [${name.join("], [")}] => Done`};

console.log(names("Osama", "Mohammed", "Ali","Ibrahem"));
//String [Osama], [Mohammed], [Ali], [Ibrahem] => Done

let myNumber = [20,50,10,60];

let calc = (one,two , ...nums) => one + two + +nums;

console.log(calc(10,myNumber[1],myNumber[0]));//80