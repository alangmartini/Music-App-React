import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Favorites extends Component {
  render() {
    const { dataTestId } = this.props;

    return (
      <div data-testid={ dataTestId }>content</div>
    );
  }
}

// Favorites.propTypes = {
// second: third
// };

export default Favorites;
