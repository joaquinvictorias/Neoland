const button = document.getElementById('incrementButton');
const spanContador = document.getElementById('clickCount');

button.addEventListener('click', () => {
    let contadorActual = +spanContador.textContent;
    spanContador.textContent = contadorActual + 1;
});