import React, { Component } from 'react';
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
      </header>
    );
  }
}

export default Header;
