/* const monster = "Dark Magician";

const darkMagician = async () => {
    try {
        let res = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${monster}`);
        let data = await res.json(); // Espera a que se resuelva la promesa
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

darkMagician(); */

const monster = "Dark Magician";

const darkMagician = async () => {
    try {
        let res = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${monster}`);
        let data = await res.json();

        // Accedemos a la carta en el JSON
        let card = data.data[0]; // La API devuelve la carta en un array `data`

        // Selecciona el contenedor de la carta en el HTML
        const cardContainer = document.getElementById("card-container");

        // Muestra la información de la carta en el contenedor
        cardContainer.innerHTML = `
            <img src="${card.card_images[0].image_url}" alt="${card.name}">
            <div class="card-info">
                <h2>${card.name}</h2>
                <p><strong>Type:</strong> ${card.type}</p>
                <p><strong>Attribute:</strong> ${card.attribute}</p>
                <p><strong>Description:</strong> ${card.desc}</p>
                <p><strong>ATK:</strong> ${card.atk} | <strong>DEF:</strong> ${card.def}</p>
            </div>
        `;
    } catch (error) {
        console.error(error);
    }
}

// Llama a la función para cargar la carta
darkMagician();