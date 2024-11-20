export function createPokemonCard(pokemon) {
    const card = document.createElement("div");
    card.classList.add("card");

    let types = pokemon.types.map((type) => 
        `<p class="${type.type.name} type">${type.type.name[0].toUpperCase() + type.type.name.slice(1)}</p>`
    );
    types = types.join("");

    card.innerHTML = `
        <img src="${pokemon.sprites.other["official-artwork"].front_default}" alt="${pokemon.name}">
        <h2>${pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h2>
        <strong>Type:</strong>
        <div class="pokemon-types">
            ${types}
        </div>
        <p id="height"><strong>Height:</strong> ${pokemon.height / 10} m</p>
        <p><strong>Weight:</strong> ${pokemon.weight / 10} kg</p>
    `;
    return card;
}