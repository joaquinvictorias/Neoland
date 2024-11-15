/* 
1. Crea una clase Producto.
2. El constructor debe recibir nombre, precio y categoria.
3. Agrega un método mostrarProducto() que cree un elemento <div> en el DOM para mostrar el nombre, el precio y la categoría del producto.
4. Agrega un método compararPrecio(otroProducto) que compare el precio de dos instancias de Producto:
Si el producto actual es más caro, muestra un mensaje en la consola: "El producto [nombre] es más caro que [nombre de otroProducto]".
Si es más barato, muestra un mensaje indicando que es más barato.
5. Crea dos instancias de Producto, muéstralas en el DOM y compara sus precios. 
*/

class Producto {
    constructor(nombre, precio, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }

    mostrarProducto() {
        const { nombre, precio, categoria } = this;

        const tarjeta = document.createElement("div");
        tarjeta.style.border = "1px solid #ccc";
        tarjeta.style.padding = "16px";
        tarjeta.style.margin = "16px";
        tarjeta.style.textAlign = "center";
        tarjeta.style.width = "200px";

        const nombreElemento = document.createElement("h1");
        nombreElemento.textContent = nombre;

        const precioElemento = document.createElement("p");
        precioElemento.textContent = precio + "€";

        const categoriaElemento = document.createElement("p");
        categoriaElemento.textContent = categoria;

        tarjeta.appendChild(nombreElemento);
        tarjeta.appendChild(precioElemento);
        tarjeta.appendChild(categoriaElemento);

        document.body.appendChild(tarjeta);
    }

    compararPrecio(otroProducto) {
        const { nombre, precio, categoria } = this;
        precio > otroProducto.precio ? 
        console.log(`El producto ${nombre} es más caro que ${otroProducto.nombre}`) : 
        console.log(`El producto ${otroProducto.nombre} es más caro que ${nombre}`)
    }
}

const producto1 = new Producto("Cargador Amazon PowerFast", 19.99, "Electrónica");
const producto2 = new Producto("BIC Cristal Original", 0.26, "Papelería");

producto1.mostrarProducto();
producto2.mostrarProducto();
producto1.compararPrecio(producto2);