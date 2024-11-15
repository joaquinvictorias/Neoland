//* Matrices

/* const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

function sumaNotas(matriz){
    let sumaArray = []
    for(let i = 0; i < matriz.length; i++){
        let suma = 0
        for(let j = 0; j < matriz[i].length; j++)
            suma += matriz[i][j]
            sumaArray.push(suma)
    }
    return sumaArray
}

console.log(sumaNotas(matriz)) */

//* Diferencia entre Funciones y Métodos

/* function sumar(num1, num2) {
    return num1 + num2;
}

function restar(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    return num1 / num2;
}

const calculadora = {sumar: sumar, restar: restar, multiplicar: multiplicar, dividir: dividir}

console.log(calculadora.sumar(5, 2));
console.log(calculadora.restar(5, 2));
console.log(calculadora.multiplicar(5, 2));
console.log(calculadora.dividir(5, 2)); */

//* Sumar varios números

/* function sumarArray(...numArray) {
    return numArray.reduce((acc, num) => acc + num, 0);
}

console.log(sumarArray(1, 2, 3)); */

const inventario = [
    {nombre: "Camisa", categoria: "Ropa", cantidad: 10, precio: 20},
    {nombre: "Pantalón", categoria: "Ropa", cantidad: 5, precio: 30},
    {nombre: "Zapatillas", categoria: "Calzado", cantidad: 8, precio: 50},
    {nombre: "Sombrero", categoria: "Accesorios", cantidad: 15, precio: 10}
]

// Función 1: Añadir un producto

function addProduct(newProductObject) {
    const newInventario = [...inventario];
    newInventario.push(newProductObject);
    return newInventario;
}

console.log(addProduct({nombre: "Pulsera", categoria: "Accesorios", cantidad: 15, precio: 5}));

// Función 2: Buscar un producto

function findProduct(productToFind) {
    const newInventario = [...inventario];
        return newInventario.filter(product => product["nombre"] === productToFind);
}

console.log(findProduct("Zapatillas"));

// Función 3: Actualizar stock

function compra(productoSeleccionado, cantidadComprada) {
    const newInventario = [...inventario];
    for (const product of newInventario) {
        if (product.nombre === productoSeleccionado) {
            if (product.cantidad >= cantidadComprada) {
                product.cantidad -= cantidadComprada;
                return newInventario;
            } else {
                return "No hay suficiente stock disponible.";
            }
        }
    }
    return "Producto no encontrado.";
}

console.log(compra("Zapatillas", 4));

//! IntelliSense --> Ctrl+Space