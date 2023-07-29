let addButton = document.getElementById("inputadd");
let input = document.getElementById("inputtask");

let tasksElement = document.getElementById("tasks");

let taskinput;
let taskList=[];
addButton.addEventListener("click",function (params) {

    taskinput= input.value.trim();
    if(taskinput==""){
        alert("enter something")
    }

    input.value ="";
console.log(taskinput);

let newtask = document.createTextNode( `${taskinput}`);
let newtaskspan = document.createElement("span");
let newtaskdiv =document.createElement("div");
newtaskdiv.classList.add("task");
let checkboxElement = document.createElement('input');
checkboxElement.setAttribute("type","checkbox");

let delelement = document.createElement('img');

delelement.setAttribute("src","delete.png");
newtaskspan.appendChild(newtask);
newtaskdiv.appendChild(checkboxElement);
newtaskdiv.appendChild(newtaskspan);
newtaskdiv.appendChild(delelement);
tasksElement.appendChild(newtaskdiv);

})

tasksElement.addEventListener("click",function(event){
    console.log(event.target.localName);
    console.log(event);
    if(event.target.localName=="img"){
        console.log("clicked on del");
        console.log(event.target.parentElement.remove());
    }
})
