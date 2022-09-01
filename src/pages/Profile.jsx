import React, { Component } from 'react';
import Header from '../components/Header';

class Profile extends Component {
  render() {
    return (
      <div data-testid="page-profile">
        Este é o componente Profile
        <Header />
      </div>
    );
  }
}

export default Profile;
