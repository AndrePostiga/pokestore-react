import React from 'react';
import { connect } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { Container, List } from './style';

function ProductList({ pokemons, dispatch, theme }) {

  return (
    <Container>
      <List theme={theme.color}>
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

const mapStateToProps = (state) => ({
  theme: state.theme,
});

export default connect(mapStateToProps)(ProductList);
export { ProductList }