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

let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};
//  let q3 =  new Map();
//  q3.set(...[myInfo])
//  console.log(q3);
// Needed Output/
//  Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
//  3
// true
console.log(`========Q4=======`);
let theNumber = 100020003000;
let q4 =new Set(Array.from(theNumber.toString(),(n)=>+n))
q4.delete(Math.min(...q4));
console.log(+[...q4].join(""));
// Needed Output
123

console.log(`========Q5=======`);
let theName = "Elzero";

console.log([...theName]);
// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']
console.log(`========Q6=======`);
let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

console.log(chars.copyWithin(3));
// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']


let chars1 = ["A", "B", "C", 20, "D", "E", 10, 15, 6];

console.log(chars1.copyWithin(3,4).copyWithin(4));

// Needed Output
// ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']

let chars2 = ["Z", "Y", "A", "D", "E", 10, 1];

console.log(chars2.copyWithin(2,0));
// Needed Output
// ["Z", "Y", "Z", "Y", "A", "D", "E"]


let chars3 = ["A", "B", "C", "D", "E", 10, 15, 6];

console.log(chars3.sort().copyWithin(0,3,6));
// ["A", "B", "C", "A", "B", "C", "D", "E"]
console.log(`========Q7=======`);
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];
console.log([...numsOne,...numsTwo]);
// Needed Output
// [1, 2, 3, 4, 5, 6]
console.log(`========Q8=======`);
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log(Math.max(...n2)*[...n1,...n2].length);
// Needed Output
// 210