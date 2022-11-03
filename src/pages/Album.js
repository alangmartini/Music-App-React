import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Header from '../components/Header';

class Album extends Component {
  render() {
    const { dataTestId } = this.props;

    return (
      <div data-testid={ dataTestId }>
        <Header />
      </div>
    );
  }
}

Album.propTypes = {
  dataTestId: PropTypes.string.isRequired,
};

export default Album;
