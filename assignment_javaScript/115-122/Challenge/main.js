/*
  Destructuring
  - Challenge
*/

var chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

let {title:t,age:a,available:av,skills:[,two]}= myFriends[chosen-1]
console.log(t);
console.log(a);
if(av === true ){
    av='Available'
}else{
    av='Not Available'
}
console.log(av);
console.log(two);