import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Album extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { match } = this.props;
    // eslint-disable-next-line react/prop-types
    const { params } = match;
    // eslint-disable-next-line react/prop-types
    const { id } = params;
    return (
      <div data-testid="page-album">
        Este é o componente Album
        <p>{id}</p>
      </div>
    );
  }
}

export default Album;

Album.propType = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
