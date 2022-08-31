import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Album from '../pages/Album';
import Favorites from '../pages/Favorites';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Profile from '../pages/Profile';
import ProfileEdit from '../pages/Profile-Edit';
import Search from '../pages/Search';

class Rotas extends Component {
  render() {
    return (
      <Switch>
        <div>
          <Route exact path="/search" component={ Search } />
          <Route exact path="/album/:id" component={ Album } />
          <Route exact path="/favorites" component={ Favorites } />
          <Route exact path="/profile" component={ Profile } />
          <Route exact path="/profile/edit" component={ ProfileEdit } />
          <Route exact path="/" component={ Login } />
          <Route path="*" component={ NotFound } />
        </div>
      </Switch>
    );
  }
}

export default Rotas;
