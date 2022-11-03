import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Album from '../components/Album';
import Loading from './Loading/Loading';

class Search extends Component {
  state = {
    isLoading: false,
    isSearching: false,
    albunsArray: [],
    artistName: '',
  };

  render() {
    const { dataTestId, handleInput, searchArtistInput, resetInput } = this.props;
    const { isLoading, isSearching, albunsArray, artistName } = this.state;
    const CHARACTER_THRESHOLD = 2;

    const renderAllAlbuns = (arrayOfAlbuns) => arrayOfAlbuns
      .map((album) => <Album key={ album.collectionId } { ...album } />);

    const fetchAlbuns = async () => {
      this.setState({
        isSearching: true,
        isLoading: true,
        artistName: searchArtistInput,
      });
      let albunsArr = await searchAlbumsAPI(searchArtistInput);
      resetInput('searchArtistInput');
      if (albunsArr.length) albunsArr = renderAllAlbuns(albunsArr);
      this.setState({
        isLoading: false,
        albunsArray: albunsArr,
      });
    };

    const returnArrOrNot = () => {
      if (albunsArray.length) {
        return (
          <>
            <p>
              { `Resultado de álbuns de: ${artistName}`}
            </p>
            { albunsArray}
          </>
        );
      }
      return <p>Nenhum álbum foi encontrado</p>;
    };

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
          onClick={ fetchAlbuns }
        >
          Pesquisar
        </button>
        { isSearching && (
          isLoading ? <Loading /> : (
            returnArrOrNot()
          )
        )}
      </div>
    );
  }
}

Search.propTypes = {
  dataTestId: PropTypes.string.isRequired,
  searchArtistInput: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  resetInput: PropTypes.func.isRequired,
};
export default Search;
