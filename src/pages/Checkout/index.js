import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Loading} from './styles';
import { getPokemonsOfType } from '../../services/PokemonService';
import Cart from '../../components/Cart';
import ProductList from '../../components/ProductList';
import { FaSpinner } from 'react-icons/fa'

class Checkout extends Component {
  state = {
    pokemons: [],
    searchedPokemon: null,
    loading: true,
  };

  async componentDidMount() {
    const { pokemons } = this.state;
    const { theme } = this.props

    let items = JSON.parse(sessionStorage.getItem('pokemons'));
    
    if (!items) {
      items = await getPokemonsOfType(theme.theme);
    }

    this.setState({
      pokemons: [...pokemons, ...items],
      loading: false,
    });
  }

  componentWillUnmount(){
    sessionStorage.clear()
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchText } = this.props;
    const { pokemons } = this.state;

    if (prevState.pokemons !== pokemons) {
      sessionStorage.setItem('pokemons', JSON.stringify(pokemons))
      // localStorage.setItem('pokemons', JSON.stringify(pokemons));
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

  render() {
    const { pokemons, searchedPokemon, loading } = this.state;
    if(loading) {
      return <Loading><FaSpinner size={50} color="#fff">Carregando</FaSpinner></Loading>
    }

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
