import React from 'react';
import { connect } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { Container, List } from './style';

function ProductList({ pokemons, dispatch }) {
  return (
    <Container>
      <List>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <img src={pokemon.imageUrl} alt={pokemon.name} />
            <strong>{pokemon.name}</strong>
            <span>{pokemon.priceFormatted}</span>

            <button
              type="button"
              onClick={() =>
                dispatch({ type: 'ADD_TO_CART', product: pokemon })
              }
            >
              <MdAddShoppingCart size={12} color="#FFF" />
              <span>Adicionar ao carrinho</span>
            </button>
          </li>
        ))}
      </List>
    </Container>
  );
}

export default connect()(ProductList);
