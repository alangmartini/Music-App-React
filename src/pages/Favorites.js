import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Header from '../components/Header';

class Favorites extends Component {
  render() {
    const { dataTestId } = this.props;

    return (
      <div data-testid={ dataTestId }>
        <Header />
      </div>
    );
  }
}

Favorites.propTypes = {
  dataTestId: PropTypes.string.isRequired,
};

export default Favorites;
