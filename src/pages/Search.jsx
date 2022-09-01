import React, { Component } from 'react';
import Header from '../components/Header';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      buttonabilit: true,
    };
  }

  habilitButton = (event) => {
    const number = 2;
    if (event.target.value.length >= number) {
      this.setState({ buttonabilit: false });
    } else { this.setState({ buttonabilit: true }); }
  };

  render() {
    const { buttonabilit } = this.state;
    return (
      <div
        data-testid="page-search"
      >
        Este é o componente Search
        <Header />
        <form>
          <input
            data-testid="search-artist-input"
            type="text"
            onChange={ this.habilitButton }
          />
          <button
            data-testid="search-artist-button"
            type="submit"
            disabled={ buttonabilit }
          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
