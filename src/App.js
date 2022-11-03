import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //  this.state = {

  //  };
  //  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Route path="/" render={ () => <Login dataTestId="page-login" /> } />
          <Route path="/search" render={ () => <Search dataTestId="page-search" /> } />
          <Route path="/album/:id" render={ () => <Album dataTestId="page-album" /> } />
          <Route
            path="/favorites"
            render={ () => <Favorites dataTestId="page-favorites" /> }
          />
          <Route path="/profile" render={ () => <Profile dataTestId="page-profile" /> } />
          <Route
            path="/profile/edit"
            render={ () => <ProfileEdit dataTestId="page-profile-edit" /> }
          />
          <Route
            path="/"
            render={ () => <NotFound dataTestId="page-not-found" /> }
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
