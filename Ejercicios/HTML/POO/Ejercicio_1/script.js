/* 
1. Crea una clase llamada Vehiculo.
2. El constructor debe recibir dos propiedades: marca y modelo.
3. Agrega un método detalles() que muestre en la consola la marca y el modelo del vehículo (ejemplo: "Marca: Toyota, Modelo: Corolla").
4. Crea dos instancias de la clase Vehiculo y llama al método detalles() para cada una. 
*/

class Vehiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    detalles() {
        const { marca, modelo } = this;
        console.log(`Marca: ${marca}, Modelo: ${modelo}`);
    }
}

const vehiculo1 = new Vehiculo("Bugatti", "Veyron");
const vehiculo2 = new Vehiculo("Lamborghini", "Aventador");

vehiculo1.detalles();
vehiculo2.detalles();