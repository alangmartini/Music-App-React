import PropTypes from 'prop-types';
import React, { Component } from 'react';

class MusicCard extends Component {
  render() {
    const { handleFavorite, trackName, previewUrl, trackId, checked } = this.props;
    return (
      <div>
        <p>{ trackName }</p>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
        </audio>
        <label htmlFor="music">
          Favorita
          <input
            type="checkbox"
            id="music"
            data-testid={ `checkbox-music-${trackId}` }
            checked={ checked }
            onChange={ handleFavorite }
          />
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  trackId: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  handleFavorite: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default MusicCard;
