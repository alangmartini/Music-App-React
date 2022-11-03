import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Header from '../components/Header';

class Search extends Component {
  render() {
    const { dataTestId, handleInput, searchArtistInput } = this.props;
    const CHARACTER_THRESHOLD = 2;
    return (
      <div data-testid={ dataTestId }>
        <Header />
        <input
          data-testid="search-artist-input"
          type="text"
          name="searchArtistInput"
          value={ searchArtistInput }
          onChange={ handleInput }
        />
        <button
          type="button"
          data-testid="search-artist-button"
          disabled={ searchArtistInput.length < CHARACTER_THRESHOLD }
          onClick={ this.doSomething }
        >
          Pesquisar
        </button>
      </div>
    );
  }
}

Search.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  searchArtistInput: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
};
export default Search;
