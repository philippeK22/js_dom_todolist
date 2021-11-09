// selecteurs

let todoInput = document.querySelector(".todo-input");
console.log(todoInput);
let todoButton = document.querySelector(".todo-button");
console.log(todoButton);
let todoList = document.querySelector(".todo-list");
console.log(todoList);
let doButton = document.querySelector(".do");
console.log(doButton);
let myButton = document.querySelector(".toDo");
console.log(myButton);
let buttonAll = document.querySelector(".all");
console.log(buttonAll);
// ecouteurs evenement
// todoList.addEventListener("click",deleteCheck);

todoButton.addEventListener("click", (e) => {
    e.preventDefault();
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // creer mes LI
    let newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // button check
    let completButton = document.createElement("button");
    completButton.innerHTML = `<i class="fas fa-check"></i>`
    completButton.classList.add("verifie-btn");
    todoDiv.appendChild(completButton);

    // button save
    let saveButton = document.createElement("button");
    saveButton.innerHTML = `<i class="fas fa-save"></i>`
    saveButton.classList.add("save-btn");
    todoDiv.appendChild(saveButton);

    // button supprimer
    let supprButton = document.createElement("button");
    supprButton.innerHTML = `<i class="far fa-trash-alt"></i>`
    supprButton.classList.add("suppr-btn");
    todoDiv.appendChild(supprButton);

    todoList.appendChild(todoDiv);
    todoInput.value = "";


})

todoList.addEventListener("click", (e) => {
    let item = e.target;
    if (item.classList === "suppr-btn") {
        let todo = item.parentElement;
        todoList.classList.add("fall");
        todo.addEventListener("transitionend", function () {

        });
    }
      if (item.classList[0] === "verifie-btn") {
         todo.classList.toggle();
         
     }




    }
)

todoList.addEventListener("click",(e)=>{
    let verif = e.target;
    if(verif.classList ==="verifie-btn"){
        
    }
    console.log(verif);

})