export function searchByName() {
    const searchInput = document.getElementById("search").value.toLowerCase();
    const pokemonCards = document.querySelectorAll(".card");

    pokemonCards.forEach((card) => {
        const pokemonName = card.querySelector("h2").textContent.toLowerCase();
        const isVisible = pokemonName.includes(searchInput);
        card.style.display = isVisible ? "block" : "none";
    });
};