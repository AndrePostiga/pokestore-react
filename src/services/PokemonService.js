import api from './api';
import { Capitalize, formatPrice } from '../util/format';


const createPokemons = ({ id, name, imageUrl, price }) => ({
  id,
  name: Capitalize(name),
  imageUrl,
  price,
  priceFormatted: formatPrice(price),
});

export async function getPokemonsFromApi(urls) {
  const response = await api.get(urls);
  return response.map((pokemon) =>
    createPokemons({
      id: pokemon.data.id,
      name: pokemon.data.name,
      imageUrl: pokemon.data.sprites.front_default || `${process.env.PUBLIC_URL}/assets/images/guest.jpg`,
      price: Math.random() * 100,
    })
  );
}

export async function getPokemonsOfType(type) {
  let pokemons;

  try {
    const { data } = await api.getType('/type', type);
    const urls = data.pokemon.map((result) => result.pokemon.url);
    pokemons = await getPokemonsFromApi(urls);
  } catch (error) {
    throw new Error(error);
  }

  return pokemons;
}
