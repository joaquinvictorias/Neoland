import { setSessionData, redirectToDashboard } from "./common.js";
import { validUser } from "./validUser.js";

function validateLogin(email, password, validUser) {
    return email === validUser.email && password === validUser.password;
}

function handleLoginSuccess(email) {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("email", email);

    setSessionData("sessionStartTime", new Date().toISOString());

    redirectToDashboard();
}

function displayError(errorElement, message) {
    errorElement.textContent = message;
    errorElement.style.display = "block";
}

function initializeLoginForm() {
    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("error-message");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        validateLogin(email, password, validUser)
            ? handleLoginSuccess(email)
            : displayError(errorMessage, "Incorrect email or password.");
    });
}

document.addEventListener("DOMContentLoaded", () => {
    initializeLoginForm();
});

document.getElementById("myLink").addEventListener("click", (event) => {
    event.preventDefault();
    window.alert(`Email: ${validUser.email}\nPassword: ${validUser.password}`);
});