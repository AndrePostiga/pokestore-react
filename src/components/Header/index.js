import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { MdSearch } from 'react-icons/md';
import { connect } from 'react-redux';
import { Navigation } from './style';
import * as ProductListActions from '../../store/modules/productList/actions';

class Header extends Component {
  state = {
    inputValue: '',
  };

  handleChange = (input) => {
    const { search } = this.props;
    const term = input.target.value;
    this.setState({
      inputValue: term,
    });
    search(term.toLowerCase());
  };

  handleSearch = () => {
    const { inputValue } = this.state;
    const { search } = this.props;
    search(inputValue.toLowerCase());
  };

  render() {
    const { inputValue } = this.state;
    const { theme } = this.props;
    return (
      <Navigation theme={theme.color}>
        <button type="button">
          <MdSearch
            size={36}
            color="#FFF"
            onClick={() => this.handleSearch()}
          />
        </button>

        <input
          type="text"
          placeholder="Pesquisar..."
          onChange={this.handleChange}
          value={inputValue}
        />
      </Navigation>
    );
  }
}

const mapStateToProps = (state) => ({
  theme: state.theme,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(ProductListActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
export { Header };
