/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Mensagem from '../components/mensagem';
import { createUser } from '../services/userAPI';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      disabled: true,
      nameUser: '',
      signal: false,
      redirection: false,
    };
  }

  theRaibom = (event) => {
    const number = 3;
    const valorInput = event.target.value;
    if (event.target.value.length >= number) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
    this.setState({ nameUser: valorInput });
  };

  theName = async () => {
    const { nameUser } = this.state;
    this.setState({ signal: true });
    await createUser({ name: nameUser });
    this.setState({ signal: false, redirection: true });
  };

  render() {
    const { disabled, signal, redirection } = this.state;

    return (
      <div data-testid="page-login">
        <input
          data-testid="login-name-input"
          type="text"
          placeholder="digite seu nome"
          onChange={ this.theRaibom }
        />
        <input
          type="email"
          placeholder="digite seu email"
        />
        <button
          data-testid="login-submit-button"
          type="submit"
          disabled={ disabled }
          onClick={ this.theName }
        >
          Entrar
        </button>
        {signal ? <Mensagem /> : null}
        {redirection ? <Redirect to="/search" /> : null}
      </div>
    );
  }
}

export default Login;
