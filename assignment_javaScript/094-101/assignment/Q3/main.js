let Paragraph = document.getElementsByTagName("p");
let div = document.getElementsByClassName("our-element");

Paragraph[0].remove()
// console.log(div[0])
let newBefore = document.createElement("div");
newBefore.textContent="Start"
newBefore.className="start";
newBefore.title="Start Element";
newBefore.setAttribute("data-value","Start");
div[0].before(newBefore)
let newAfter = document.createElement("div");
newAfter.textContent="End"
newAfter.className="end";
newAfter.title="end Element";
newAfter.setAttribute("data-value","End");
div[0].after(newAfter)