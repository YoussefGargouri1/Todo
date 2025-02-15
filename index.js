document.addEventListener("DOMContentLoaded", function(){

    let name = document.querySelector("#name");
    let content = document.querySelector("#content");
    let button = document.querySelector(".Add");


    function addTodo(){

        let newTodo =document.createElement("p");
        newTodo.classList.add("listaaaa");

        newTodo.innerHTML = `${name.value} : ${content.value} <button class = "delete"><img class="poubelle" src="535246.png"></button>`;

        let delbut = newTodo.querySelector(".delete");
        delbut.addEventListener("click" , function(){
            newTodo.remove();
        })

        document.querySelector(".todolist").appendChild(newTodo);


        name.value = "";
        content.value = "";
    }

    button.addEventListener("click" , addTodo);

})
