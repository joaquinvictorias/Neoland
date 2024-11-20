const apiAllTypes = "https://pokeapi.co/api/v2/type";

export async function populateTypeOptions() {
    try {
        const res = await fetch(apiAllTypes);
        const data = await res.json();
        const typesList = data.results;

        const typeFilter = document.getElementById("type-filter");

        typesList.forEach((type) => {
            const option = document.createElement("option");
            option.value = type.name;
            option.textContent = type.name[0].toUpperCase() + type.name.slice(1);
            typeFilter.appendChild(option);
        });
    } catch (error) {
        console.error(error);
    }
}