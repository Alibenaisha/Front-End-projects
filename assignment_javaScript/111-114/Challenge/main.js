// // // box
let titleBox = document.querySelector('.text');
let buttonBox = document.querySelector('.button-box');
let show = document.querySelector('.show');


let arr=[];
let arrget = JSON.parse(localStorage.getItem("name"))
if(localStorage.getItem("name")){
    for(let i=0 ; i <arrget.length ;i++){
        arr.push(arrget[i])
        let titleShow = document.createElement("div");
        titleShow.className = 'box-show'
        show.appendChild(titleShow);
        
        let textShow = document.createElement("div");
        textShow.className='text-show';
        textShow.textContent=arrget[i];
        titleShow.appendChild(textShow);
        
        let buttonShow = document.createElement("button");
        buttonShow.className='button-show';
        buttonShow.textContent='Delete'
        titleShow.appendChild(buttonShow);
    }
}
buttonBox.onclick = ()=>{
    
    let titleShow = document.createElement("div");
    titleShow.className = 'box-show'
    show.appendChild(titleShow);
    
    let textShow = document.createElement("div");
    textShow.className='text-show';
    textShow.textContent=titleBox.value;
    titleShow.appendChild(textShow);
    
    let buttonShow = document.createElement("button");
    buttonShow.className='button-show';
    buttonShow.textContent='Delete'
    titleShow.appendChild(buttonShow);
    arr.push(titleBox.value);
    localStorage.setItem("name",JSON.stringify(arr))
    // localStorage.name = JSON.stringify(arr)
    titleBox.value = ""
}
show.addEventListener("click", function (el) {
  arr.forEach(function (e) {
    if (e === el.target.previousSibling.textContent) {
      arr.splice(arr.indexOf(e), 1);
    }
  });
  if (arr.length)
    localStorage.setItem("name", JSON.stringify(arr));
  else localStorage.clear("name");

  el.target.parentElement.remove();
});
console.log(arr)

// let tasksTextStorage = [];

// let storeArray = JSON.parse(localStorage.getItem("tasks"));

// if (localStorage.getItem("tasks")) {
//   for (let i = 0; i < storeArray.length; i++) {
//     tasksTextStorage.push(storeArray[i]);

//     let task = document.createElement("div");
//     task.className = "task";
//     tasks.append(task);

//     let textTask = document.createElement("p");
//     textTask.textContent = storeArray[i];
//     task.appendChild(textTask);

//     let deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "delete";
//     task.appendChild(deleteBtn);
//   }
// }




// localStorage.clear()


// let titleShow = document.createElement("div");
// titleShow.className = 'box-show'
// show.appendChild(titleShow);

// let textShow = document.createElement("div");
// textShow.className='text-show';
// textShow.textContent=`xzczc`
// titleShow.appendChild(textShow);

// let buttonShow = document.createElement("button");
// buttonShow.className='button-show';
// buttonShow.textContent='Delete'
// titleShow.appendChild(buttonShow);



















// let form = document.querySelector("form");
// let input = document.querySelector('[type = "text"]');
// let tasks = document.querySelector(".tasks");
// let deleteBtn = document.querySelector(".tasks .task button");
// let removeAll = document.querySelector(".remove-all");

// let tasksTextStorage = [];

// let storeArray = JSON.parse(localStorage.getItem("tasks"));

// if (localStorage.getItem("tasks")) {
//   for (let i = 0; i < storeArray.length; i++) {
//     tasksTextStorage.push(storeArray[i]);

//     let task = document.createElement("div");
//     task.className = "task";
//     tasks.append(task);

//     let textTask = document.createElement("p");
//     textTask.textContent = storeArray[i];
//     task.appendChild(textTask);

//     let deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "delete";
//     task.appendChild(deleteBtn);
//   }
// }

// form.onsubmit = function (e) {
//   e.preventDefault();
//   if (input.value) {
//     let task = document.createElement("div");
//     task.className = "task";
//     tasks.append(task);

//     let textTask = document.createElement("p");
//     textTask.textContent = input.value;
//     task.appendChild(textTask);

//     let deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "delete";
//     task.appendChild(deleteBtn);

//     input.value = "";

//     tasksTextStorage.push( textTask.textContent);
//     localStorage.setItem("tasks", JSON.stringify(tasksTextStorage));
//   }
// };

// tasks.addEventListener("click", function (el) {
//   tasksTextStorage.forEach(function (e) {
//     if (e === el.target.previousSibling.textContent) {
//       tasksTextStorage.splice(tasksTextStorage.indexOf(e), 1);
//     }
//   });
//   if (tasksTextStorage.length)
//     localStorage.setItem("tasks", JSON.stringify(tasksTextStorage));
//   else localStorage.clear("tasks");

//   el.target.parentElement.remove();
// });

// removeAll.onclick = function () {
//   localStorage.clear("tasks");
//   document.querySelectorAll(".tasks .task").forEach((el) => el.remove());
// };