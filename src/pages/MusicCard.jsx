import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import Mensagem from '../components/mensagem';

class MusicCard extends Component {
  state = {
    getFavoritas: [],
    message: false,
  };

  async componentDidMount() {
    this.setState({ message: true });
    const favorites = await getFavoriteSongs();
    this.setState({ message: false });
    this.setState({
      getFavoritas: favorites,
    });
  }

  Songs = async (event) => {
    event.target.checked = true;
    this.setState({ message: true });
    const { objectFunction } = this.props;
    await addSong(objectFunction);
    this.setState({ message: false });
  };

  render() {
    const { previewUrl, trackName, trackId } = this.props;
    const { message, getFavoritas } = this.state;
    return (
      <div>
        {message ? <Mensagem /> : null}
        <p>{trackName}</p>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          <code>audio</code>
        </audio>
        <label htmlFor="input-checkbox">
          <input
            data-testid={ `checkbox-music-${trackId}` }
            type="checkbox"
            id="input-checkbox"
            checked={ getFavoritas.find((itens) => itens.trackId === trackId) }
            onClick={ this.Songs }
          />
          Favorita
        </label>
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
