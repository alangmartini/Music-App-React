import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShowProfile extends Component {
  render() {
    const { name, email, image, description } = this.props;

    return (
      <div>
        <h1>{ name }</h1>
        <h2>{ email }</h2>
        <img
          data-testid="profile-image"
          src={ image }
          alt="user"
        />
        <p>{ description }</p>
        <Link to="/profile/edit">Editar perfil</Link>
      </div>
    );
  }
}

ShowProfile.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ShowProfile;
