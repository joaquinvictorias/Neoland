// URL del backend (asegúrate de cambiar esto según sea necesario)
const API_URL = "http://127.0.0.1:3000/api/v1/users";

// Función para renderizar los productos en el DOM
function renderUsers(items) {
    const userContainer = document.getElementById("user-container");

    // Vaciar el contenedor antes de añadir los productos
    userContainer.innerHTML = "";

    // Crear elementos para mostrar los productos
    items.data.users.forEach((user) => {
        const userElement = document.createElement("div");
        userElement.className = "user";
        userElement.innerHTML = `
      <h2>${user.name[0].toUpperCase() + user.name.slice(1)}</h2>
      <p>Email: ${user.email}</p>
    `;
    userContainer.appendChild(userElement);
    });
}

// Función para obtener productos del backend
const fetchUsers = async () => {
    try {
        // Realizar la solicitud al backend
        const response = await fetch(API_URL);

        // Verificar si la respuesta es exitosa
        if (!response.ok) {
            throw new Error(`Error al obtener los usuarios: ${response.status}`);
        }

        // Convertir la respuesta a JSON
        const data = await response.json();

        // Llamar a la función para renderizar los productos
        renderUsers(data);
    } catch (error) {
        console.error(error.message);
    }
}

// Llamar a la función para obtener los productos cuando cargue la página
fetchUsers();