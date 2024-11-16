export function filterByType() {
    const selectedType = document.getElementById("type-filter").value.toLowerCase();
    const pokemonCards = document.querySelectorAll(".card");

    pokemonCards.forEach((card) => {
        const pokemonTypes = Array.from(card.querySelectorAll(".pokemon-types .type")).map((typeElement) => 
            typeElement.textContent.toLowerCase());
        
        const isVisible = !selectedType || pokemonTypes.includes(selectedType);
        card.style.display = isVisible ? "block" : "none";
    });
}