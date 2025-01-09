// URL del backend (asegúrate de cambiar esto según sea necesario)
const API_URL = "http://127.0.0.1:3000/api/v1/products";

// Función para renderizar los productos en el DOM
function renderProducts(items) {
    const productContainer = document.getElementById("product-container");

    // Vaciar el contenedor antes de añadir los productos
    productContainer.innerHTML = "";

    // Crear elementos para mostrar los productos
    items.data.products.forEach((product) => {
        const productElement = document.createElement("div");
        productElement.className = "product";
        productElement.innerHTML = `
      <h2>${product.name.split(" ").map((e) => e[0].toUpperCase() + e.slice(1)).join(" ")}</h2>
      <img src="${product.image || "https://raw.githubusercontent.com/joaquinvictorias/assets/refs/heads/main/images/image__00.png"}" alt="${product.name}">
      <p>Precio: ${product.price} €</p>
      <p>Categoría: ${product.category}</p>
      <p>Color: ${product.color}</p>
      <p>Stock: ${product.stock} ${product.stock === 1 ? "ud." : "uds."}</p>
    `;
    productContainer.appendChild(productElement);
    });
}

// Función para obtener productos del backend
const fetchProducts = async () => {
    try {
        // Realizar la solicitud al backend
        const response = await fetch(API_URL);

        // Verificar si la respuesta es exitosa
        if (!response.ok) {
            throw new Error(`Error al obtener los productos: ${response.status}`);
        }

        // Convertir la respuesta a JSON
        const data = await response.json();

        // Llamar a la función para renderizar los productos
        renderProducts(data);
    } catch (error) {
        console.error(error.message);
    }
}

// Llamar a la función para obtener los productos cuando cargue la página
fetchProducts();