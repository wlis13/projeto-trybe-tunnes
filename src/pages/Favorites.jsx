import React, { Component } from 'react';
import Header from '../components/Header';

class Favorites extends Component {
  render() {
    return (
      <div
        data-testid="page-favorites"
      >
        Este é o componente Favorites
        <Header />
      </div>
    );
  }
}

export default Favorites;
