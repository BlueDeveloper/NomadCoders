const greetingForm = document.querySelector(`#section-form`);
const middleContainer = document.querySelector(".intro-middle");
const greetingSpan = document.querySelector(`#section-form span.greeting`);
const userInput = document.querySelector(`#section-form input.input-greeting`);
let userObject = JSON.parse(localStorage.getItem(`userInfo`));

if (userObject === null) {
    userInput.focus();
    userObject = {};
    greetingForm.addEventListener(`submit`, controlForm);
    middleContainer.style.opacity = 1;
} else if(userObject.password === undefined){
    greetingForm.addEventListener(`submit`, controlForm);
    changeSpanText();
} else {
    finishGreeting();

}

/* get User_Info */
function controlForm(e) {
    e.preventDefault();
    let keyInfo = userInput.dataset.keyinfo;
    userObject[keyInfo] = userInput.value;
    middleContainer.style.opacity = 0;
    setTimeout(changeSpanText, 500);
    localStorage.setItem(`userInfo`, JSON.stringify(userObject));
}


function changeSpanText() {
    greetingSpan.innerText = `What's your password`;
    userInput.value = "";
    userInput.dataset.keyinfo = `password`;
    showmiddleContainer();
    if (userObject.username !== undefined && userObject.password !== undefined) {
        finishGreeting();
    }
}

function finishGreeting() {
    const greetingText = hourlyGreeting(userObject.username);
    userInput.value = `${greetingText}`;

    userInput.style.fontSize = "1.5rem"
    greetingSpan.style.transition = "0.5";
    greetingSpan.style.fontSize = "5.375rem"
    middleContainer.style.alignItems = "unset"

    setInterval(setTime,1000)
    setTimeout(showmiddleContainer, 500);
    middleContainer.querySelector(".input-wrapper-greeting").style.borderBottom = "0px";
}

function showmiddleContainer() {
    if (userObject.username !== undefined && userObject.password !== undefined) {
        setTime();
    }
    middleContainer.style.opacity = 1;
}

/* set currentTime */
function setTime() {
    // greetingSpan.setAttribute("readOnly","true")
    const hour = String(new Date().getHours()).padStart(2, "0");
    const minutes = String(new Date().getMinutes()).padStart(2, "0");
    const seconds = String(new Date().getSeconds()).padStart(2, "0");
    greetingSpan.innerText = `${hour}:${minutes}:${seconds}`;
}



