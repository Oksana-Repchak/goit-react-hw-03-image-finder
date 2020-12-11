import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import articlesApi from './services/articlesApi';
import Searchbar from './components/Searchbar';

const ImageGallery = ({ hits }) => (
  <ul className="ImageGallery">
    {hits.map(({ id, webformatURL, title }) => (
      <li key={id}>
        <img
          src={webformatURL}
          // data-source={{ largeImageURL }}
          alt={title}
        />
      </li>
    ))}
  </ul>
);

class App extends Component {
  state = {
    searchQuery: '',
    hits: [],
    currentPage: 1,
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchArticles();
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      hits: [],
      error: null,
    });
  };

  fetchArticles = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    articlesApi
      .fetchImages(options)
      .then(hits => {
        this.setState(prevState => ({
          hits: [...prevState.hits, ...hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };
  render() {
    const { hits, isLoading, error } = this.state;
    const shouldRenderLoadMoreButton = hits.length > 0 && !isLoading;

    return (
      <>
        {error && <p>Whoops, something went wrong: {error.message}</p>}

        <Searchbar onSubmit={this.onChangeQuery} />

        {hits.length > 0 && <ImageGallery hits={hits} />}

        {isLoading && (
          <Loader
            type="Hearts"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        )}

        {shouldRenderLoadMoreButton && (
          <button type="button" onClick={this.fetchArticles}>
            Загрузить ещё
          </button>
        )}
      </>
    );
  }
}
export default App;
