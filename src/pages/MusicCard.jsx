import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import Mensagem from '../components/mensagem';

class MusicCard extends Component {
  constructor() {
    super();

    this.state = {
      getFavoritas: [],
      message: false,
    };
  }

  async componentDidMount() {
    this.setState({ message: true });
    const favorites = await getFavoriteSongs();
    this.setState({ message: false });
    this.setState({
      getFavoritas: favorites,
    });
  }

  favoriteSong = async () => {
    const { objectFunction } = this.props;
    console.log(objectFunction);
    this.setState({ message: true });
    await addSong(objectFunction);
    this.setState({ message: false });
  };

  render() {
    const { previewUrl, trackName, trackId } = this.props;
    const { message, getFavoritas } = this.state;
    return (
      <div>
        <p>{trackName}</p>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          <code>audio</code>
        </audio>
        <label htmlFor="input-checkbox">
          <input
            data-testid={ `checkbox-music-${trackId}` }
            type="checkbox"
            name="checkbox"
            id="input-checkbox"
            onClick={ this.favoriteSong }
            onChange={ this.componentDidMount }
            checked={ getFavoritas.some((itens) => itens.trackId === trackId) }
          />
          Favorita
        </label>
        {message ? <Mensagem /> : null}
      </div>
    );
  }
}

export default MusicCard;

MusicCard.propTypes = {
  previewUrl: PropTypes.string.isRequired,
  trackName: PropTypes.string.isRequired,
  objectFunction: PropTypes.shape({
    trackId: PropTypes.number.isRequired,
  }).isRequired,
  trackId: PropTypes.number.isRequired,
};
