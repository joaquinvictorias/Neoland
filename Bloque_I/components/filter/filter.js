export function filterByType() {
    const selectedType = document.getElementById("type-filter").value.toLowerCase();
    const pokemonCards = document.querySelectorAll(".card");

    pokemonCards.forEach((card) => {
        const pokemonTypes = card.querySelectorAll("p")[0].textContent.replace("Type: ", "").toLowerCase().split(" - ");
        const isVisible = !selectedType || pokemonTypes.includes(selectedType);
        card.style.display = isVisible ? "block" : "none";
    });
}