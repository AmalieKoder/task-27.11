// A function when you write a name it should appear in HTML

// Task One

function submitName() {
    let nameInput = document.querySelector("#textInput").value;
    console.log(nameInput);

    let inputP = document.querySelector("#p");
    inputP.textContent = nameInput;
}

// When this button hear a click this should be active (submitName)

let button = document.querySelector("#button");
button.addEventListener("click", submitName);


// A function when you write a username, email and password it should appear in HTML when you click this send button

// Task Two

function submitUsernameEmailPassword() {
    let userName = document.querySelector("#userName").value;

    let inputP = document.querySelector("#p1");
    inputP.textContent = userName;
    
    let email = document.querySelector("#emailInput").value;

    let emailInput = document.querySelector("#p2");
    emailInput.textContent = email;

    let password = document.querySelector("#passordInput").value;

    let passwordInput = document.querySelector("#p3");
    passwordInput.textContent = password;
    
}

// When this button hear a click this should be active (submitUsernameEmailPassword)

let sendButton = document.querySelector("#sendButton");
sendButton.addEventListener("click", submitUsernameEmailPassword);

