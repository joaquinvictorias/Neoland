/* Ejercicio 2: Cambiar el Estilo de un Elemento
Instrucciones:
    1.	Crea un botón que, al hacer click, cambie el color de fondo de un cuadro. */


function cambiarColor() {
    const div = document.getElementById('cuadro');
    div.style.backgroundColor = generarColorAleatorio(); // Cambiamos el color de fondo del cuadro
}


function generarColorAleatorio() {
    const letras = '0123456789ABCDEF'; // Lista de caracteres hexadecimales
    let color = '#'; // Iniciamos la cadena con '#'
    // Generamos 6 caracteres aleatorios para formar un color hexadecimal
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)]; // Escogemos un carácter aleatorio de 'letras'
    }
    return color; // Retornamos el color generado
}