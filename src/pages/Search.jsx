import React, { Component } from 'react';
import Header from '../components/Header';
import Mensagem from '../components/mensagem';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Render from './componenteRender';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      buttonabilit: true,
      strRequisicao: '',
      pesquisa: true,
      resposta: false,
      renderInfo: false,
      arrayResposta: [],
    };
  }

  habilitButton = (event) => {
    const number = 2;
    if (event.target.value.length >= number) {
      this.setState({ buttonabilit: false });
    } else {
      this.setState({ buttonabilit: true });
    }
    this.setState({ strRequisicao: event.target.value });
  };

  requisicao = (event) => {
    event.preventDefault();
    const { strRequisicao } = this.state;
    this.setState({ pesquisa: false });
    searchAlbumsAPI(strRequisicao).then((responseApi) => this.setState({
      arrayResposta: [...responseApi],
      pesquisa: true,
      resposta: true,
      renderInfo: true,
    }));
  };

  renderApi = () => {
    const { arrayResposta } = this.state;
    return arrayResposta.map((itens, pos) => (
      <Render
        key={ pos }
        artistName={ itens.artistName }
        collectionName={ itens.collectionName }
        artworkUrl100={ itens.artworkUrl100 }
        collectionPrice={ itens.collectionPrice }
        releaseDate={ itens.releaseDate }
        collectionId={ itens.collectionId }
      />
    ));
  };

  render() {
    const { pesquisa, buttonabilit } = this.state;
    const { resposta, strRequisicao } = this.state;
    const { renderInfo, arrayResposta } = this.state;
    return (
      <div data-testid="page-search">
        Este é o componente Search
        <Header />
        {pesquisa ? (
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
              onClick={ this.requisicao }
            >
              Pesquisar
            </button>
          </form>
        ) : (
          <Mensagem />
        )}
        {resposta ? <p>{`Resultado de álbuns de: ${strRequisicao}`}</p> : null}
        {arrayResposta.length === 0 ? <p>Nenhum álbum foi encontrado</p> : null}
        {renderInfo ? <p>{strRequisicao}</p> : null}
        {this.renderApi()}
      </div>
    );
  }
}

export default Search;
