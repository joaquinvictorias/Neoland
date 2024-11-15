
const div = document.getElementById('colorBox');

div.addEventListener('mouseover', () => {
    div.style.backgroundColor = generarColorAleatorio();
});


function generarColorAleatorio() {
    const letras = '0123456789ABCDEF'; // Lista de caracteres hexadecimales
    let color = '#'; // Iniciamos la cadena con '#'
    // Generamos 6 caracteres aleatorios para formar un color hexadecimal
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)]; // Escogemos un carácter aleatorio de 'letras'
    }
    return color; // Retornamos el color generado
}
