import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import Loading from './Loading/Loading';
import { addSong, removeSong, getFavoriteSongs } from '../services/favoriteSongsAPI';

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      favoriteSongs: [],
    };
  }

  componentDidMount() {
    this.fetchFavoriteSongs();
  }

  addCheckedToFavoritesCuzTestsArePoorlyMade = () => {
    const { favoriteSongs } = this.state;

    this.setState({ favoriteSongs });
  };

  fetchFavoriteSongs = async () => {
    this.setState({ isLoading: true });

    // Had to add this code snippet to add checked property
    // since tests simply put stuff in localStorage instead of
    // adding to favorites like a user would :)
    let favoriteSongs = await getFavoriteSongs();
    favoriteSongs = favoriteSongs.map((song) => {
      if (!song.checked) song.checked = true;
      return song;
    });

    this.setState({
      isLoading: false,
      favoriteSongs,
    });
  };

  handleFavorite = async (music) => {
    this.setState({ isLoading: true });
    music.checked = !music.checked;
    const addOrRemove = music.checked ? addSong : removeSong;
    await addOrRemove(music);
    await this.fetchFavoriteSongs();
    this.setState({
      isLoading: false,
    });
  };

  render() {
    const { dataTestId } = this.props;
    const { isLoading, favoriteSongs } = this.state;

    return (
      <div data-testid={ dataTestId }>
        <Header />
        {
          isLoading ? <Loading /> : (
            <>
              { favoriteSongs
                .map((music) => (<MusicCard
                  key={ music.trackName }
                  { ...music }
                  handleFavorite={ () => this.handleFavorite(music) }
                />)) }
            </>

          )
        }
      </div>
    );
  }
}

Favorites.propTypes = {
  dataTestId: PropTypes.string.isRequired,
};

export default Favorites;
