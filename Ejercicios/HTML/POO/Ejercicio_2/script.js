/* 
1. Crea una clase Usuario.
2. El constructor debe recibir nombre, edad y email.
3. Agrega un método mostrarInfo() que cree un elemento <div> en el DOM. Este div debe mostrar el nombre, la edad y el email del usuario.
4. Crea una instancia de Usuario y llama al método mostrarInfo() para añadir la información del usuario al DOM. 
*/

class Usuario {
    constructor(nombre, edad, email) {
        this.nombre = nombre;
        this.edad = edad;
        this.email = email;
    }

    mostrarInfo() {
        const { nombre, edad, email } = this;

        const tarjeta = document.createElement("div");
        tarjeta.style.border = "1px solid #ccc";
        tarjeta.style.padding = "16px";
        tarjeta.style.margin = "16px";
        tarjeta.style.textAlign = "center";
        tarjeta.style.width = "200px";

        const nombreElemento = document.createElement("h1");
        nombreElemento.textContent = nombre;

        const edadElemento = document.createElement("p");
        edadElemento.textContent = edad;

        const emailElemento = document.createElement("p");
        emailElemento.textContent = email;

        tarjeta.appendChild(nombreElemento);
        tarjeta.appendChild(edadElemento);
        tarjeta.appendChild(emailElemento);

        document.body.appendChild(tarjeta);
    }
}

const usuario1 = new Usuario("Ana", 25, "ana@example.com");

usuario1.mostrarInfo();