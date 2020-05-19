import React from 'react';
import { getPokemonsFromApi, getPokemonsOfType } from './PokemonService';

describe('Pokemon Service', () => {
  it('Should be abble to fetch one pokemon ', async () => {
    const data = [
      {
        id: 1,
        name: 'Bulbasaur',
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        price: expect.anything(),
        priceFormatted: expect.anything(),
      },
    ];

    const response = await getPokemonsFromApi([
      'https://pokeapi.co/api/v2/pokemon/1',
    ]);

    expect(data).toEqual(response);
  });

  it('Should be abble to fetch two pokemons', async () => {
    const data = [
      {
        id: 1,
        name: 'Bulbasaur',
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        price: expect.anything(),
        priceFormatted: expect.anything(),
      },
      {
        id: 2,
        name: 'Ivysaur',
        imageUrl:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
        price: expect.anything(),
        priceFormatted: expect.anything(),
      },
    ];

    const response = await getPokemonsFromApi([
      'https://pokeapi.co/api/v2/pokemon/1',
      'https://pokeapi.co/api/v2/pokemon/2',
    ]);

    expect(data).toEqual(response);
  });
});
