import api from './api';
import { Capitalize } from '../util/format';

async function getPokemonsFromApi(urls) {
  const response = await api.get(urls);
  return response.map((pokemon) => ({
    id: pokemon.data.id,
    name: Capitalize(pokemon.data.name),
    imageUrl: pokemon.data.sprites.front_default,
    price: Math.random() * 100,
  }));
}

export async function getAllPokemons(page = 1) {
  const { data } = await api.getItems('/pokemon', page);
  const urls = data.results.map((item) => item.url);
  const results = await api.get(urls);
  const pokemon = results.map((result) => {
    const item = result.data;
    return {
      name: Capitalize(item.name),
      imagesUrl: item.sprites,
      type: item.types,
      price: Math.random() * 100,
    };
  });

  return pokemon;
}

export async function getPokemonsOfType(type) {
  const { data } = await api.getType('/type', type);
  const urls = data.pokemon.map((result) => result.pokemon.url);
  const pokemons = await getPokemonsFromApi(urls);
  return pokemons;
}

export async function getPokemon(name) {
  const { data } = await api.getItem('/pokemon', name.toLowerCase());
  return {
    id: data.id,
    name: Capitalize(data.name),
    imageUrl: data.sprites.front_default,
    price: Math.random() * 100,
  };
}

export async function searchPokemon(name, type) {
  const { data } = await api.getType('/type', type);

  const search = data.pokemon.find((element) => {
    return element.pokemon.name === name;
  });

  const pokemon = await getPokemonsFromApi([search.pokemon.url]);
  console.log(pokemon);
  return pokemon;
}
