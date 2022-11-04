import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header';
import { getUser, updateUser } from '../services/userAPI';
import Loading from './Loading/Loading';

class ProfileEdit extends Component {
  state = {
    isLoading: false,
    isDone: false,
    name: '',
    email: '',
    image: '',
    description: '',
  };

  componentDidMount() {
    this.fetchUserInLocalStorage();
  }

  fetchUserInLocalStorage = async () => {
    this.setState({
      isLoading: true,
    });
    const user = await getUser();
    this.setState({
      isLoading: false,
      ...user,
    });
  };

  sendUserToLocalStorage = async () => {
    this.setState({
      isLoading: true,
    });
    const { isLoading, isDone, ...user } = this.state;
    await updateUser(user);
    this.setState({
      isLoading: false,
      isDone: true,
    });
  };

  validateButtons = () => {
    const { name, email, image, description } = this.state;
    const validateEmail = email.match(/[a-zA-Z.\-'0-9]+@[a-zA-Z]+\.com/);
    const validTextValues = [name, image, description].every((field) => field.length);
    const isValid = !(validateEmail && validTextValues);
    return isValid;
  };

  handleInput = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
    return value;
  };

  render() {
    const { dataTestId } = this.props;
    const { name, email, image, description, isDone, isLoading } = this.state;

    return (
      <div data-testid={ dataTestId }>
        <Header />
        { isLoading ? <Loading /> : (
          <>
            <input
              data-testid="edit-input-name"
              type="text"
              value={ name }
              onChange={ this.handleInput }
              name="name"
            />
            <input
              data-testid="edit-input-email"
              type="text"
              value={ email }
              onChange={ this.handleInput }
              name="email"
            />
            <input
              data-testid="edit-input-image"
              type="text"
              value={ image }
              onChange={ this.handleInput }
              name="image"
            />
            <input
              data-testid="edit-input-description"
              type="text"
              value={ description }
              onChange={ this.handleInput }
              name="description"
            />
            <button
              disabled={ this.validateButtons() }
              onClick={ this.sendUserToLocalStorage }
              data-testid="edit-button-save"
              type="button"
            >
              Salvar
            </button>
            { isDone && <Redirect to="/profile" /> }
          </>
        )}
      </div>
    );
  }
}

ProfileEdit.propTypes = {
  dataTestId: PropTypes.string.isRequired,
};

export default ProfileEdit;
