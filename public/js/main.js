// import { deleteCheck } from "./modules/delete.js";


// selecteurs
let formulaire = document.querySelector("form");
console.log(formulaire);
let todoInput = document.querySelector(".todo-input");
console.log(todoInput);
let todoButton = document.querySelector(".todo-button");
console.log(todoButton);
let todoList = document.querySelector(".todo-list");
console.log(todoList);
let ulButton = document.querySelector(".todo-list");
console.log(ulButton);
let doButton = document.querySelector(".do");
console.log(doButton);
let myButton = document.querySelector(".toDo");
console.log(myButton);
let buttonAll = document.querySelector(".all");
console.log(buttonAll);
let buttonClear = document.querySelector(".clearBtn");
console.log(buttonClear);
// ecouteurs evenement
// todoList.addEventListener("click",deleteCheck);

// formulaires

// formulaire.addEventListener("submit",(e)=>{
//     const taches = input.value
//     if (!taches) {
//         alert('entrez une tache');
//         return;

        
//     }
// })



// les input
todoButton.addEventListener("click", (e) => {
    e.preventDefault();
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // creer mes LI
    let newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    
    // button check
    let completButton = document.createElement("button");

    completButton.innerHTML = `<i class="fas fa-check"></i>`

    completButton.classList.add("verifie-btn");
    newTodo.appendChild(completButton);
    completButton.addEventListener('click', () => {
        newTodo.style.backgroundColor ="blue"
        newTodo.classList.toggle("bg-white")
    })
    // completButton.addEventListener("dblclick",()=>{
    //     newTodo.style.backgroundColor =""
    // })
    console.log(completButton);

    // button save
    let saveButton = document.createElement("button");
    saveButton.innerHTML = `<i class="fas fa-save"></i>`
    saveButton.classList.add("save-btn");
    newTodo.appendChild(saveButton);
    saveButton.addEventListener('click' , () => {

        
        
    })
    // button supprimer
    let supprButton = document.createElement("button");
    supprButton.innerHTML = `<i class="far fa-trash-alt"></i>`
    supprButton.classList.add("suppr-btn");
    supprButton.addEventListener('click',()=>{
        ulButton.removeChild(newTodo);
        

       
    });
    newTodo.appendChild(supprButton);
    todoList.appendChild(newTodo);
    
   

    todoInput.value = "";

    // les 3 boutons filtrer

     doButton.addEventListener("click",()=>{
         let newtodoBlue = newTodo.style.backgroundColor="blue"
        if (newTodo ==  newtodoBlue ) {
            console.log("okey");
            
        }
     })
     myButton.addEventListener("click",()=>{
         
     })


     let divClear = document.querySelector(".clearRouge");

    //  button clear
    buttonClear.addEventListener("click",()=>{
        divClear.removeChild(todoList);
        

    })



})




