import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from '../pages/Loading/Loading';

class Header extends Component {
  state = {
    isLoading: false,
    name: '',
  };

  componentDidMount() {
    this.getUserData();
  }

  getUserData = async () => {
    this.setState({ isLoading: true });
    const { name } = await getUser();
    this.setState({
      isLoading: false,
      name,
    });
  };

  render() {
    const { isLoading, name } = this.state;
    return (
      <header
        data-testid="header-component"
      >
        { isLoading ? <Loading /> : (
          <p data-testid="header-user-name">{ name }</p>
        )}
        <Link
          data-testid="link-to-search"
          to="/search"
        >
          Search
        </Link>
        <Link
          data-testid="link-to-favorites"
          to="/favorites"
        >
          Favorites
        </Link>
        <Link
          data-testid="link-to-profile"
          to="/profile"
        >
          Profile
        </Link>
      </header>
    );
  }
}

export default Header;
