/* Ejercicio 1: Añadir un Párrafo al hacer Click
Instrucciones:
    1.	Crea un botón que, al hacer click, añada un nuevo párrafo debajo del botón con un texto predefinido. */

function agregarParrafo() {
    const div = document.getElementById('contenedor');
    const paragraph = document.createElement('p');
    paragraph.innerHTML = 'Lorem Ipsum';
    div.appendChild(paragraph);
}
