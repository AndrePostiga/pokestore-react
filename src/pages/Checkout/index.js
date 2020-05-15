import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';

import { Container, ProductList } from './styles';
import Cart from '../../components/Cart';
import { formatPrice } from '../../util/format';
import {
  getPokemonsOfType,
  searchPokemon,
} from '../../services/PokemonService';

class Checkout extends Component {
  state = {
    pokemons: [],
  };

  async componentDidMount() {
    const { pokemons } = this.state;
    const items = await this.getPokemons('grass');
    this.setState({
      pokemons: [...pokemons, ...items],
    });
  }

  async componentDidUpdate(prevProps) {
    const { searchText } = this.props;

    if (prevProps.searchText !== searchText) {
      const searched = await searchPokemon(searchText, 'grass');
      this.setState({ pokemons: [...searched] });
    }
  }

  getPokemons = async (type) => {
    const data = await getPokemonsOfType(type);
    const items = data.map((item) => ({
      ...item,
      priceFormatted: formatPrice(item.price),
    }));

    return items;
  };

  handleAdd = (product) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'ADD_TO_CART',
      product,
    });
  };

  render() {
    const { pokemons } = this.state;
    return (
      <Container>
        <ProductList>
          {pokemons.map((pokemon) => (
            <li key={pokemon.id}>
              <img src={pokemon.imageUrl} alt={pokemon.name} />
              <strong>{pokemon.name}</strong>
              <span>{pokemon.priceFormatted}</span>

              <button type="button" onClick={() => this.handleAdd(pokemon)}>
                <MdAddShoppingCart size={12} color="#FFF" />
                <span>Adicionar ao carrinho</span>
              </button>
            </li>
          ))}
        </ProductList>
        <Cart />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  searchText: state.productList,
});

export default connect(mapStateToProps)(Checkout);
