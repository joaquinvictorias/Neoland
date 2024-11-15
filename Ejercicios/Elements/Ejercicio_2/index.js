const button = document.getElementById('submitButton');

button.addEventListener('click', () => {
    alert('Enviado');
    button.disabled = true;
});