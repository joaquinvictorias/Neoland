/* Ejercicio 3: Añadir y Quitar Elementos Dinámicamente
Instrucciones:
    1.	Crea un botón para añadir elementos (líneas de lista) a una lista y otro botón para eliminarlos. */

function agregarElemento() {
    const lista = document.getElementById('lista');
    const element = document.createElement('li');
    lista.appendChild(element);
}

function eliminarElemento() {
    const lista = document.getElementById('lista');
    // Elimina la última lista agregada, si hay alguna.
    lista.lastChild && lista.lastChild.remove();
}

