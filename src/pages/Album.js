import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';
import Loading from './Loading/Loading';
import { addSong } from '../services/favoriteSongsAPI';

class Album extends Component {
  constructor(props) {
    super(props);
    const { match: { params: { id } } } = props;
    this.state = {
      id,
      isLoading: false,
      artistName: '',
      collectionName: '',
      albumMusics: [],
    };
  }

  componentDidMount() {
    this.fetchAlbum();
  }

  fetchAlbum = async () => {
    const { id } = this.state;
    const albumArray = await getMusics(id);
    const [albumInfo, ...musics] = albumArray;
    const { artistName, collectionName } = albumInfo;
    const musicsWithCheckboxValue = musics.map((music) => ({ ...music, checked: false }));
    this.setState({
      artistName,
      collectionName,
      albumMusics: musicsWithCheckboxValue,
    });
    return albumArray;
  };

  handleFavorite = async (music) => {
    const { albumMusics } = this.state;
    const selectedMusicIndex = albumMusics
      .findIndex(({ trackId }) => trackId === music.trackId);
    albumMusics[selectedMusicIndex].checked = true;
    this.setState({ isLoading: true });
    await addSong(music);
    this.setState({
      isLoading: false,
      albumMusics,
    });
  };

  render() {
    const { dataTestId } = this.props;
    const { artistName, collectionName, albumMusics, isLoading } = this.state;

    return (
      <div data-testid={ dataTestId }>
        <Header />
        {
          isLoading ? <Loading /> : (
            <>
              <p data-testid="artist-name">{artistName}</p>
              <p data-testid="album-name">{collectionName}</p>
              { albumMusics
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

Album.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  match: PropTypes.objectOf(
    PropTypes.objectOf(
      PropTypes.number.isRequired,
    ).isRequired,
  ).isRequired,
};

export default Album;
