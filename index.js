let btn = document.querySelector(".create-account-btn");
let passwordInput = document.querySelector(".password-input");
let confirmPasswordInput = document.querySelector(".confirm-password-input");
let passwordContainer = document.querySelector(".password-container");
let passwordStatusDiv = document.createElement("div");

function comparePasswords() {
    if (passwordInput.value == "" && confirmPasswordInput.value == "" || passwordInput.value !== confirmPasswordInput.value)
    {
        passwordStatusDiv.textContent = "Passwords don't match.";
        passwordStatusDiv.style.fontSize = "0.7rem";
        passwordInput.style.borderColor = "red";
        confirmPasswordInput.style.borderColor = "red";
        passwordContainer.appendChild(passwordStatusDiv);
    }
    else if (passwordInput.value === confirmPasswordInput.value)
    {
        passwordStatusDiv.textContent = "Passwords match!";
        passwordStatusDiv.style.fontSize = "0.7rem";
        passwordInput.style.borderColor = "green";
        confirmPasswordInput.style.borderColor = "green";
        passwordContainer.appendChild(passwordStatusDiv);
    }
}

//btn.addEventListener("click", comparePasswords (passwordInput, confirmPasswordInput));

