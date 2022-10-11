const todoForm = document.querySelector(`#section-form`);

middleContainer.querySelector(".intro-middle-wrapper-todo").style.display = "inline-flex";
todoForm.addEventListener("submit",controlToDo);

function controlToDo(e){
    e.preventDefault();
}


