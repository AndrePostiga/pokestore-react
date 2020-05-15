import React, { Component } from 'react';
import { MdSearch } from 'react-icons/md';
import { connect } from 'react-redux';
import { Navigation } from './style';

class Header extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    inputValue: '',
  };

  handleChange = (input) => {
    this.setState({
      inputValue: input.target.value,
    });
  };

  handleSearch = () => {
    const { inputValue } = this.state;
    const { dispatch } = this.props;

    dispatch({
      type: 'SEARCH',
      inputValue,
    });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <Navigation>
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

export default connect()(Header);
