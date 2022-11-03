import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Album extends Component {
  render() {
  const { dataTestId } = this.props;

    return (
      <div data-testid={ dataTestId }>content</div>
    );
  }
}

// Album.propTypes = {
// second: third
// };

export default Album;
