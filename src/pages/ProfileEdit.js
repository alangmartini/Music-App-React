import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ProfileEdit extends Component {
  render() {
    const { dataTestId } = this.props;

    return (
      <div data-testid={ dataTestId }>content</div>
    );
  }
}

// ProfileEdit.propTypes = {
// second: third
// };

export default ProfileEdit;
