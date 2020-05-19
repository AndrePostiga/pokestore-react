import api from './api';
import { Capitalize, formatPrice } from '../util/format';

export async function getPokemonsFromApi(urls) {
  const response = await api.get(urls);

  return response.map((pokemon) =>
    createPokemons({
      id: pokemon.data.id,
      name: pokemon.data.name,
      imageUrl: pokemon.data.sprites.front_default,
      price: Math.random() * 100,
    })
  );
}

export async function getPokemonsOfType(type) {
  const { data } = await api.getType('/type', type);
  const urls = data.pokemon.map((result) => result.pokemon.url);
  const pokemons = await getPokemonsFromApi(urls);
  return pokemons;
}

const createPokemons = ({ id, name, imageUrl, price }) => ({
  id,
  name: Capitalize(name),
  imageUrl,
  price,
  priceFormatted: formatPrice(price),
});
