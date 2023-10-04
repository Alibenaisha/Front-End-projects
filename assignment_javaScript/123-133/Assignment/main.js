console.log(`========Q1=======`);


let q1= new Set().add(10);
// q1.add(10)
q1.add(20)
q1.add(2)               // Needed Output
console.log(q1);        // Set(3) {10, 20, 2}
console.log([...q1][2]);// 2
console.log(`========Q2=======`);

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

let q2 = new Set(myFriends);
console.log([...q2].sort());
// Needed Output
//(4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']
console.log(`========Q3=======`);

