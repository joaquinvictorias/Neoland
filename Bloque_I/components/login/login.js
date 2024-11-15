import { setSessionData, redirectToDashboard } from "./common.js";

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

    const validUser = {
        email: "admin@gmail.com",
        password: "password123",
    };

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        validateLogin(email, password, validUser)
            ? handleLoginSuccess(email)
            : displayError(errorMessage, "Email o contraseña incorrectos.");
    });
}

document.addEventListener("DOMContentLoaded", () => {
    initializeLoginForm();
});