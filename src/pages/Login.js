import PropTypes from 'prop-types';
import React, { Component } from 'react';
import createUser from '../services/userAPI';

class Login extends Component {
  state = {
    loginNameInput: '',

  };

  render() {
    const { dataTestId, handleChange } = this.props;
    const { loginNameInput } = this.state;
    const saveUserData = () => {
      const { loginNameInput } = this.state;
      createUser({ name: loginNameInput });
    };
    return (
      <div data-testid={ dataTestId }>
        <input
          data-testid="login-name-input"
          type="text"
          onChange={ handleChange }
          value={ loginNameInput }
        />
        <button
          type="button"
          data-testid="login-submit-button"
        />
      </div>
    );
  }
}

// Login.propTypes = {
// second: third
// };

export default Login;
