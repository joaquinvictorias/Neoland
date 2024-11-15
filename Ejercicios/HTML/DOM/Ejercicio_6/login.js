document.addEventListener('DOMContentLoaded', () => {
    initializeLoginForm();
});

function initializeLoginForm() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');

    const validUser = {
        username: 'admin',
        password: 'password123',
    };

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        validateLogin(username, password, validUser)
            ? handleLoginSuccess(username)
            : displayError(errorMessage, 'Usuario o contraseña incorrectos.');
    });
}

function validateLogin(username, password, validUser) {
    return username === validUser.username && password === validUser.password;
}

function displayError(errorElement, message) {
    errorElement.textContent = message;
    errorElement.style.display = 'block';  // Mostramos el mensaje de error solo cuando hay un error
}

function handleLoginSuccess(username) {
    // Guardamos el estado de login en localStorage
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('username', username);
}
