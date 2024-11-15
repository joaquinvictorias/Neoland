export function createPokemonCard(pokemon) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${pokemon.sprites.other["official-artwork"].front_default}" alt="${pokemon.name}">
        <h2>${pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h2>
        <p><strong>Type:</strong> ${pokemon.types.map((typeElement) => 
            typeElement.type.name[0].toUpperCase() + typeElement.type.name.slice(1)).join(" - ")}</p>
        <p><strong>Height:</strong> ${pokemon.height / 10} m</p>
        <p><strong>Weight:</strong> ${pokemon.weight / 10} kg</p>
    `;
    return card;
}