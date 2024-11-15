const toggleButton = document.getElementById("toggle-dark-mode");

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        toggleButton.textContent = "Toggle Light Mode";
        toggleButton.style.background = "#f1f1f1";
        toggleButton.style.color = "#333";
    } else {
        localStorage.setItem("theme", "light");
        toggleButton.textContent = "Toggle Dark Mode";
        toggleButton.style.background = "#333";
        toggleButton.style.color = "#f1f1f1";
    }
});