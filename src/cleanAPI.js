import {pokemons} from './API.js';

export const getPokemon = async (id) => {
    const response = await fetch(pokemons(id));
    const info = await response.json();
    return info;
  };
