import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from './Loading/Loading';

class Login extends Component {
  state = {
    isLoading: false,
    redirect: false,
  };

  render() {
    const { loginNameInput, dataTestId, handleInput } = this.props;
    const { isLoading, redirect } = this.state;
    const CHARACTER_THRESHOLD = 3;

    const saveUserData = async () => {
      this.setState({ isLoading: true });
      await createUser({ name: loginNameInput });
      this.setState({
        isLoading: false,
        redirect: true,
      });
      return <Redirect to="/search" />;
    };

    return (
      <div data-testid={ dataTestId }>
        {
          isLoading ? <Loading /> : (
            <>
              <input
                data-testid="login-name-input"
                type="text"
                name="loginNameInput"
                onChange={ handleInput }
                value={ loginNameInput }
              />
              <button
                type="button"
                id="login-submit-button"
                data-testid="login-submit-button"
                disabled={ loginNameInput.length < CHARACTER_THRESHOLD }
                onClick={ saveUserData }
              >
                Entrar
              </button>

            </>
          )
        }
        { redirect && <Redirect to="/search" /> }
      </div>
    );
  }
}

Login.propTypes = {
  loginNameInput: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
};

export default Login;
