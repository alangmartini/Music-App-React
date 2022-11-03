import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';

class Album extends Component {
  constructor(props) {
    super(props);
    const { match: { params: { id } } } = props;
    this.state = {
      id,
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
    this.setState({
      artistName,
      collectionName,
      albumMusics: musics,
    });
    return albumArray;
  };

  render() {
    const { dataTestId } = this.props;
    const { artistName, collectionName, albumMusics } = this.state;

    return (
      <div data-testid={ dataTestId }>
        <Header />
        <p data-testid="artist-name">{ artistName }</p>
        <p data-testid="album-name">{ collectionName }</p>
        { albumMusics.map((music) => <MusicCard {...music} />) }
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
