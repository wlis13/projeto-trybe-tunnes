import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';
import Mensagem from '../components/mensagem';

class MusicCard extends Component {
  state = {
    message: false,
  };

  favoriteSong = async () => {
    const { objectFunction } = this.props;
    this.setState({ message: true });
    await addSong(objectFunction);
    this.setState({ message: false });
  };

  render() {
    const { previewUrl, trackName, trackId } = this.props;
    const { message } = this.state;
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
  previewUrl: PropTypes.shape({
  }).isRequired,
  trackName: PropTypes.string.isRequired,
  trackId: PropTypes.string.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  objectFunction: PropTypes.shape({}).isRequired,
};
