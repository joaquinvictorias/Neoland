import { getPokemon, getMorePokemonInfo } from "./utils/api.js";
import { createPokemonCard } from "./components/card/card.js";
import { searchByName } from "./components/search/search.js";
import { populateTypeOptions } from "./components/filter/types.js";
import { filterByType } from "./components/filter/filter.js";

const pokemonContainer = document.getElementById("pokemon-container");

async function loadPokemon() {
    try {
        const allPokemon = await getPokemon();
        const pokemonMoreInfo = await Promise.all(
            allPokemon.map((pokemon) => {
                return getMorePokemonInfo(pokemon.url);
            })
        );

        pokemonMoreInfo.forEach((pokemon) => {
            const card = createPokemonCard(pokemon);
            pokemonContainer.appendChild(card);
        });
    } catch (error) {
        console.error(error);
    }
}

loadPokemon();
document.getElementById("search").addEventListener("input", searchByName);
populateTypeOptions();
document.getElementById("type-filter").addEventListener("change", filterByType);