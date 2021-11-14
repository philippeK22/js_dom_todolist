 export let input = () => {

     let formulaire = document.querySelector("form");
     console.log(formulaire);
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
     let buttonClear = document.querySelector(".clearBtn");
     console.log(buttonClear);
     let troisbutton = document.querySelector(".button-list");
     console.log(troisbutton);



     todoButton.addEventListener("click", (e) => {
         e.preventDefault();
         let todoDiv = document.createElement("div");
         console.log(todoDiv);
         todoDiv.classList.add("todo");
         const demande = todoInput.value;
         if (!demande) {
             alert("entrez une tache");
             return

         }

    


         let input = document.createElement("input");
         console.log(input);
         input.classList.add("text1");
         input.type = "text"
         input.innerText = todoInput.value
         input.value = todoInput.value
         input.setAttribute("text", "value")
         todoDiv.appendChild(input)

         // button check
         let completButton = document.createElement("button");


         completButton.innerHTML = `<i class="fas fa-check"></i>`

         completButton.classList.add("verifie-btn");
         todoDiv.appendChild(completButton);

         completButton.addEventListener('click', () => {
             input.classList.add("bg-blue");
             input.classList.toggle("bg-white")
             // input.style.backgroundColor ="blue"

         })

         console.log(completButton);

         // button save

         let saveButton = document.createElement("button");
         saveButton.innerHTML = `<i class="fas fa-save"></i>`
         saveButton.classList.add("save-btn");
         todoDiv.appendChild(saveButton);

         const buttEdit = document.createElement("button");
         console.log(buttEdit);
         buttEdit.classList.add("edit");
         buttEdit.innerHTML = "edit"

         saveButton.addEventListener('dblclick', () => {

             if (input.innerText.toLowerCase() == `Edit`) {
                 input.removeAttribute("text");
                 input.focus();
                 input.innerText = "save";


             } else {
                 input.setAttribute("text", "value");
                 input.innerText = "Edit"
             }
             todoDiv.append(input);

         })
         saveButton.addEventListener("click", () => {

             if (buttEdit.innerText.toLowerCase() == `Edit`) {
                 input.removeAttribute("text")
                 input.focus();
                 input.innerText = "save";


             } else {
                 input.setAttribute("text", "value");
                 saveButton.innerText = "Edit"

             }
         })



         // button supprimer
         let supprButton = document.createElement("button");
         supprButton.innerHTML = `<i class="far fa-trash-alt"></i>`
         supprButton.classList.add("suppr-btn");
         supprButton.addEventListener('click', () => {
             todoList.removeChild(todoDiv);

         });

         todoDiv.appendChild(supprButton);
         todoList.appendChild(todoDiv);
         todoInput.value = "";

         //  button clear
         let divClear = document.querySelector(".clearRouge");
         console.log(divClear);

         buttonClear.addEventListener("click", () => {
             divClear.removeChild(todoList);


         })
         
    doButton.addEventListener("click", () => {

        if (input.classList.contains("bg-blue") != true) {
            input.style.display = "none"

        }

    })

    myButton.addEventListener("click", () => {

        if (input.classList.contains("bg-blue") == true) {
            input.style.display = "none"

        }

    })

    buttonAll.addEventListener("click", () => {

        input.style.display = "flex"

    })
     })
 }