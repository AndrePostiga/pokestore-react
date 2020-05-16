import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from './styles';
import { formatPrice } from '../../util/format';
import { getPokemonsOfType } from '../../services/PokemonService';
import Cart from '../../components/Cart';
import ProductList from '../../components/ProductList';

class Checkout extends Component {
  state = {
    pokemons: [],
    searchedPokemon: null,
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    const { pokemons } = this.state;

    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
      cart.map((product) => {
        dispatch({
          type: 'ADD_TO_CART',
          product,
        });
      });
    }

    let items = JSON.parse(localStorage.getItem('pokemons'));
    if (!items) {
      items = await this.getPokemons('grass');
    }

    this.setState({
      pokemons: [...pokemons, ...items],
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchText } = this.props;
    const { pokemons } = this.state;

    if (prevState.pokemons !== pokemons) {
      localStorage.setItem('pokemons', JSON.stringify(pokemons));
    }

    if (prevProps.searchText !== searchText) {
      const searched = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().startsWith(searchText)
      );
      this.setState({
        searchedPokemon: searched[0] ? [...searched] : null,
      });
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

  render() {
    const { pokemons, searchedPokemon } = this.state;
    return (
      <Container>
        <ProductList pokemons={searchedPokemon || pokemons} />
        <Cart />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  searchText: state.productList,
});

export default connect(mapStateToProps)(Checkout);
