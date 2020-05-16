import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container} from './styles';
import { getPokemonsOfType } from '../../services/PokemonService';
import Cart from '../../components/Cart';
import ProductList from '../../components/ProductList';

class Checkout extends Component {
  state = {
    pokemons: [],
    searchedPokemon: null,
  };

  async componentDidMount() {
    const { pokemons } = this.state;
    const { theme } = this.props

    let items = JSON.parse(localStorage.getItem('pokemons'));
    if (!items) {
      items = await this.getPokemons(theme.theme);
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
    return data;
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
  theme: state.theme
});

export default connect(mapStateToProps)(Checkout);
