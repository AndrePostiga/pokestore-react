import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { Container, List } from './style';
import * as CartActions from '../../store/modules/cart/actions';

function ProductList({ pokemons, addToCart, theme }) {
  return (
    <Container>
      <List theme={theme.color}>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <img src={pokemon.imageUrl} alt={pokemon.name} />
            <strong>{pokemon.name}</strong>
            <span>{pokemon.priceFormatted}</span>

            <button type="button" onClick={() => addToCart(pokemon)}>
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

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
export { ProductList };
