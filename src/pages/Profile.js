import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Profile extends Component {
  render() {
    const { dataTestId } = this.props;

    return (
      <div data-testid={ dataTestId }>content</div>
    );
  }
}

// Profile.propTypes = {
// second: third
// };

export default Profile;
