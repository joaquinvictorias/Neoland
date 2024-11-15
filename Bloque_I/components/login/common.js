export function checkLoginStatus() {
    return localStorage.getItem("loggedIn") === "true";
}

export function redirectToLogin() {
    window.location.href = "./index.html";
}

export function redirectToDashboard() {
    window.location.href = "../../index.html";
}

export function setSessionData(key, value) {
    sessionStorage.setItem(key, value);
}

export function getSessionData(key) {
    return sessionStorage.getItem(key);
}