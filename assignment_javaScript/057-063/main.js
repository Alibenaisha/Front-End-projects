
function sayHello(theName,theGender){
    if(theGender==="Male"){
        console.log(`Hello Mr ${theName}`)
    }else if(theGender==="Female"){
        console.log(`Hello Miss ${theName}`)
    }else{
        console.log(`Hello ${theName}`)
    }
}
console.log("-------------Q1---------------")
sayHello("ali","Male");
sayHello("nat","Female");
sayHello("ali");

function calculate(firstNum, secondNum, operation) {
    if(operation === undefined && secondNum === undefined){
        console.log("Second Number Not Found");
    }else if( operation === "add"){
        console.log(`${firstNum} + ${secondNum} = ${firstNum + secondNum}`);
    }else if( operation === "subtract"){
        console.log(`${firstNum} - ${secondNum} = ${firstNum-secondNum}`);
    }else if( operation === "multiply"){
        console.log(`${firstNum} * ${secondNum} = ${firstNum*secondNum}`);
    }else{
        console.log(`${firstNum} + ${secondNum} = ${firstNum + secondNum}`);
    }}
console.log("-------------Q2---------------")
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600
console.log("-------------Q3---------------")
function ageInTime(theAge) {
    // Your Code Here
    // let m;
    let m=0;
    if(theAge<=100 && theAge>=10){
        m = theAge * 12
        w = m*4.3482;
        d = w*7;
        h = d*24;
        min = h*60;
        s=min*60;
        console.log(`
        Months : ${m} 
        Week : ${w} 
        day : ${d} 
        hour : ${h}
        min : ${min}
        sec : ${s}`
      );
    }else{
        console.log("Age Out Of Range")
    }
}

// Needed Output
ageInTime(38); // Months Example => 456 Months
ageInTime(110); // Age Out Of Range
ageInTime(9); // Age Out Of Range
console.log("-------------Q4---------------")
function checkStatus(a, b, c) {
    // Your Code Here
    let  x;
    let  y;
    let  z;
    if( typeof a === "string" ){
        x=`${a}`;
    }else if(typeof b === "string"){
        x=`${b}`;
    }
    else if(typeof c === "string"){
        x=`${c}`;
    }
    if( typeof a ===  "number"){
        y=`${a}`;
    }else if(typeof b === "number"){
        y=`${b}`;
    }
    else if(typeof c === "number"){
        y=`${c}`;
    }
    if( typeof a ===  "boolean" && typeof a ===  true){
        z=`You Are Available For Hire`;
    }else if(typeof b ===  "boolean" && typeof b ===  true){
        z=`You Are Available For Hire`;
    }
    else if(typeof c ===  "boolean" && typeof c ===  true){
        z=`You Are Available For Hire`;
    }else{
        z=`You Are Not Available For Hire`
    }
    
    console.log(`Hello ${x}, Your Age Is ${y}, ${z}`)
}
  
    // Needed Output
    checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
    checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
    checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
    checkStatus(true, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
    console.log("-------------Q5---------------");
    function createSelectBox(startYear, endYear) {
        // Your Code Here
        document.write("<select>")
        for(let i = startYear ; i <= endYear ; i++ ){
            
            document.write( `<option value="${i}">${i}</option>`)
            
        }
        document.write("</select>")
    }
    createSelectBox(2000, 2021);
    console.log("-------------Q6---------------");
    function multiply(...num){
        x=1;
        for(let i= 0 ;i < num.length;i++){
            
             if(typeof(num[i]) === "number"){
                 // y= parseInt(num[i])
                 x *=parseInt(num[i]);
                 //console.log(x)
                }
                
            }
            console.log(x)
        
    }
    multiply(10, 20); // 200
    multiply("A", 10, 30); // 300
    multiply(100.5, 10, "B"); // 1000