import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Search extends Component {
  render() {
    const { dataTestId } = this.props;

    return (
      <div data-testid={ dataTestId }>content</div>
    );
  }
}

// Search.propTypes = {
// second: third
// };

export default Search;
