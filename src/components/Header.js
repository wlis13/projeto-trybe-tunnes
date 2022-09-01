import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Mensagem from './mensagem';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      returnName: '',
      maisUm: false,
    };
  }

  async componentDidMount() {
    this.setState({ maisUm: true });
    const retornoNome = await getUser();
    this.setState({ maisUm: false });
    this.setState({ returnName: retornoNome.name });
  }

  render() {
    const { returnName, maisUm } = this.state;

    return (
      <header data-testid="header-component">
        Componente Header
        <p>{maisUm ? <Mensagem /> : null}</p>
        <p data-testid="header-user-name">{`Usuário: ${returnName}`}</p>
        <nav>
          <Link data-testid="link-to-search" to="/search">Pesquisa</Link>
          <Link data-testid="link-to-favorites" to="/favorites">Músicas Favoritas</Link>
          <Link data-testid="link-to-profile" to="/profile">Exibir Perfil</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
