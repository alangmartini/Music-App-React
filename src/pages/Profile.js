import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Header from '../components/Header';
import ShowProfile from '../components/ShowProfile';
import { getUser } from '../services/userAPI';
import Loading from './Loading/Loading';

class Profile extends Component {
  state = {
    isLoading: false,
    user: {
      name: '',
      email: '',
      image: '',
      description: '',
    },
  };

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = async () => {
    this.setState({ isLoading: true });
    const user = await getUser();
    this.setState({
      isLoading: false,
      user,
    });
  };

  render() {
    const { dataTestId } = this.props;
    const { isLoading, user } = this.state;
    return (
      <div data-testid={ dataTestId }>
        <Header />
        { isLoading ? <Loading /> : <ShowProfile { ...user } />}
      </div>
    );
  }
}

Profile.propTypes = {
  dataTestId: PropTypes.string.isRequired,
};
export default Profile;
