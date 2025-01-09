// URLs del backend
const API_ORDERS = "http://localhost:3000/api/v1/orders";
const API_PRODUCTS = "http://localhost:3000/api/v1/products";
const API_USERS = "http://localhost:3000/api/v1/users";

// Función para obtener órdenes, productos y usuarios
const fetchOrders = async () => {
    try {
        // Obtener datos del backend
        const [ordersResponse, productsResponse, usersResponse] = await Promise.all([
            fetch(API_ORDERS),
            fetch(API_PRODUCTS),
            fetch(API_USERS),
        ]);

        // Verificar si todas las respuestas son exitosas
        if (!ordersResponse.ok || !productsResponse.ok || !usersResponse.ok) {
            throw new Error("Error al obtener los datos del backend.");
        }

        // Convertir respuestas a JSON
        const orders = await ordersResponse.json();
        const products = await productsResponse.json();
        const users = await usersResponse.json();

        // Mapear IDs a nombres
        const productMap = new Map(products.data.products.map((product) => [product.id, product.name]));
        const userMap = new Map(users.data.users.map((user) => [user.id, user.name]));

        // Reemplazar IDs por nombres
        const ordersWithNames = orders.data.orders.map((order) => ({
            ...order,
            productName: productMap.get(order.productId) || "Producto desconocido",
            userName: userMap.get(order.userId) || "Usuario desconocido",
        }));

        // Renderizar las órdenes
        renderOrders(ordersWithNames);
    } catch (error) {
        console.error("Error al obtener las órdenes:", error.message);
    }
};

// Función para renderizar las órdenes en el DOM
const renderOrders = (orders) => {
    const orderContainer = document.getElementById("order-container");

    // Limpiar contenedor antes de añadir contenido
    orderContainer.innerHTML = "";

    // Crear elementos para cada orden
    orders.forEach((order) => {
        const orderElement = document.createElement("div");
        orderElement.className = "order";
        orderElement.innerHTML = `
      <h2>ID: ${order._id}</h2>
      <p>Producto: ${order.productName[0].toUpperCase() + order.productName.slice(1)}</p>
      <p>Usuario: ${order.userName}</p>
      <p>Cantidad: ${order.products.map((product) => product.quantity)}</p>
      <p>Precio Total: ${order.totalPrice} €</p>
      <p>Estado: ${order.status}</p>
      <p>Fecha: ${new Date(order.createdAt).toUTCString()}</p>
    `;
        orderContainer.appendChild(orderElement);
    });
};

// Llamar a la función para obtener y mostrar las órdenes
fetchOrders();