import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FaSpinner } from 'react-icons/fa';
import swal from '@sweetalert/with-react';
import { Container, Loading, Pagination } from './styles';
import { getPokemonsOfType } from '../../services/PokemonService';
import Cart from '../../components/Cart';
import ProductList from '../../components/ProductList';

class Checkout extends Component {
  state = {
    pokemons: [],
    pokemonsView: [],
    currentPage: 1,
    pokemonsPerPage: 6,
    searchedPokemon: null,
    loading: true,
  };

  async componentDidMount() {
    const { pokemons, currentPage, pokemonsPerPage } = this.state;
    const { theme } = this.props;

    let items = JSON.parse(sessionStorage.getItem('pokemons'));

    if (!items) {
      try {
        items = await getPokemonsOfType(theme.theme);
      } catch (error) {
        swal({
          text:
            'Não foi possível capturar todos os Pokemon, por favor, atualize a página e tente novamente',
          buttons: {
            cancel: 'Close',
          },
        });
        return;
      }
    }

    const indexOfLastPokemon = currentPage * pokemonsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
    const pokemonsView = items.slice(indexOfFirstPokemon, indexOfLastPokemon);

    this.setState({
      pokemons: [...pokemons, ...items],
      loading: false,
      pokemonsView: [...pokemonsView],
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { searchText } = this.props;
    const { pokemons } = this.state;

    if (prevState.pokemons !== pokemons) {
      sessionStorage.setItem('pokemons', JSON.stringify(pokemons));
    }

    if (prevProps.searchText !== searchText) {
      let searched = null;

      if (searchText !== '') {
        searched = pokemons.filter((pokemon) =>
          pokemon.name.toLowerCase().startsWith(searchText)
        );
      }

      this.setState({
        searchedPokemon: searched ? [...searched] : null,
      });
    }
  }

  componentWillUnmount() {
    sessionStorage.clear();
  }

  setNewPagination(newPage) {
    const { pokemons, pokemonsPerPage } = this.state;

    const indexOfFirstPokemon = (newPage - 1) * pokemonsPerPage;
    const indexOfLastPokemon = indexOfFirstPokemon + pokemonsPerPage;
    const newSet = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

    this.setState({
      pokemonsView: [...newSet],
      currentPage: newPage,
    });
  }

  handleNextPage = () => {
    const { currentPage, pokemons, pokemonsPerPage } = this.state;
    const lastPage = Math.ceil(pokemons.length / pokemonsPerPage);
    const newPage = currentPage === lastPage ? lastPage : currentPage + 1;
    this.setNewPagination(newPage);
  };

  handlePreviousPage = () => {
    const { currentPage } = this.state;
    const newPage = currentPage === 1 ? 1 : currentPage - 1;
    this.setNewPagination(newPage);
  };

  render() {
    const { pokemonsView, searchedPokemon, loading } = this.state;
    const { theme } = this.props;

    if (loading) {
      return (
        <Loading>
          <FaSpinner size={50} color="#fff">
            Carregando
          </FaSpinner>
        </Loading>
      );
    }

    return (
      <>
        <Container>
          <ProductList pokemons={searchedPokemon || pokemonsView} />
          <Cart />
        </Container>
        <Pagination theme={theme.color}>
          <button type="button" onClick={() => this.handlePreviousPage()}>
            <span>Retroceder</span>
          </button>
          <button type="button" onClick={() => this.handleNextPage()}>
            <span>Avançar</span>
          </button>
        </Pagination>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  searchText: state.productList,
  theme: state.theme,
});

export default connect(mapStateToProps)(Checkout);
