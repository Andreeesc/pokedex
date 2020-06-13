import { PokemonListAPIInterface } from "../models/Pokemon/pokemon.interface";

const BASE_URL = 'https://pokeapi.co/api/v2';

export const getPokemonListAPI = ({
    page = 0, 
    limit = 22
}: {
    page: number;
    limit?: number;
}): Promise<PokemonListAPIInterface> => {
    const LIST_URL = `pokemon?limit${limit}&offset=${page}`;
    return fetch(`${BASE_URL}/${LIST_URL}`).then((response) => response.json());
}