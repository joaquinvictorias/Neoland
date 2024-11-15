const getPokemon = async () => {
    try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
        const data = await res.json();
        const pokemonList = data.results;

        const cardContainer = document.getElementById("card-container");

        cardContainer.innerHTML = "";

        const detailedPokemonList = await Promise.all(
            pokemonList.map(async (pokemon) => {
                const pokemonDetails = await fetch(pokemon.url);
                const details = await pokemonDetails.json();
                return details;
            })
        );

        detailedPokemonList.sort((a, b) => a.id - b.id);

        detailedPokemonList.forEach((details) => {

            let isContacted = false;

            const userCard = document.createElement("div");
            userCard.classList.add("user-card");

            userCard.innerHTML = `
                <img src="${details.sprites.front_default}" alt="${details.name}">
                <div class="card-info">
                    <h2>${details.name}</h2>
                    <p><strong>Height:</strong> ${details.height / 10} m</p>
                    <p><strong>Weight:</strong> ${details.weight / 10} kg</p>
                    <div class="button-container">
                        <button id="contact-button-${details.id}">
                            ${isContacted ? "Contactado" : "Contactar"}
                        </button>
                    </div>
                </div>
                `;

            cardContainer.appendChild(userCard);

            const contactButton = document.getElementById(`contact-button-${details.id}`);

            contactButton.onclick = () => {
                isContacted = !isContacted;
                contactButton.textContent = isContacted ? "Contactado" : "Contactar";
            }
        });
    } catch (error) {
        console.error(error);
    }
}

getPokemon();