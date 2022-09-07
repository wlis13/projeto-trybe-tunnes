import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from './MusicCard';

class Album extends Component {
  constructor() {
    super();
    this.state = {
      artistName: '',
      albumName: '',
      total: [],
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const valueId = id;
    const valueRequisicao = await getMusics(valueId);
    const getRequisicao = [...valueRequisicao];
    const getValueget = getRequisicao.map((itens) => itens);
    const nameArtist = getValueget.map((itens) => itens.artistName);
    const nameAlbum = getValueget.map((itens) => itens.collectionName);
    this.setState(() => ({ total: [...getValueget] }));
    this.setState({
      artistName: nameArtist,
      albumName: nameAlbum,
    });
  }

  render() {
    const { artistName, albumName, total } = this.state;
    const numberTotalLength = total.length;
    const filterTotal = total.splice(1, numberTotalLength);
    return (
      <div data-testid="page-album">
        Este é o componente Album
        <Header />
        <h1 data-testid="artist-name">{ artistName[0] }</h1>
        <h2 data-testid="album-name">{ albumName[0] }</h2>
        <div>
          { filterTotal.map((itens, pos) => (
            <MusicCard
              key={ pos }
              trackName={ itens.trackName }
              previewUrl={ itens.previewUrl }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Album;

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
