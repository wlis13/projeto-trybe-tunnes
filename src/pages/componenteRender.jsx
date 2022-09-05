import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Render extends Component {
  render() {
    const { artistName, collectionName, artworkUrl100, collectionPrice } = this.props;
    const { releaseDate, collectionId } = this.props;
    return (
      <div>
        <h1>{artistName}</h1>
        <h3>{collectionName}</h3>
        <img alt="imagen" src={ artworkUrl100 } />
        <h4>{collectionPrice}</h4>
        <p>{releaseDate}</p>
        <Link
          data-testid={ `link-to-album-${collectionId}` }
          to={ `/album/${collectionId}` }
        >
          Informações
        </Link>
      </div>
    );
  }
}

export default Render;

Render.propTypes = {
  artistName: PropTypes.string.isRequired,
  collectionName: PropTypes.string.isRequired,
  artworkUrl100: PropTypes.string.isRequired,
  collectionPrice: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  collectionId: PropTypes.string.isRequired,
};
