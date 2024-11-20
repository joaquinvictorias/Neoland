const apiGenFour = "https://pokeapi.co/api/v2/pokemon?limit=107&offset=386";

export async function getPokemon() {
    try {
        const res = await fetch(apiGenFour);
        const data = await res.json();
        const pokemonList = data.results;
        return pokemonList;
    } catch (error) {
        console.error(error);
    }
}

export async function getMorePokemonInfo(url) {
    try {
        const res = await fetch(url);
        const data = await res.json()
        return data;
    } catch (error) {
        console.error(error);
    }
}