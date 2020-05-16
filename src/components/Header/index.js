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
    const { dispatch } = this.props;

    const term = input.target.value;

    this.setState({
      inputValue: term,
    });

    dispatch({
      type: 'SEARCH',
      inputValue: term.toLowerCase(),
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
    const { theme } = this.props
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
  theme: state.theme
});

export default connect(mapStateToProps)(Header);
