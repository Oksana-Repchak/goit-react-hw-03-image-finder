import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

import imagesServices from './services/imagesServices';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';

class App extends Component {
  state = {
    imageName: '',
    images: [],
    currentPage: 1,
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.imageName !== this.state.imageName) {
      this.fetchImages();
    }
  }

  onChangeQuery = imageName => {
    this.setState({
      imageName,
      currentPage: 1,
      images: [],
      error: null,
    });
  };

  fetchImages = () => {
    const { imageName, currentPage } = this.state;
    const options = { imageName, currentPage };

    this.setState({ isLoading: true });

    imagesServices
      .fetchImages(options)
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { images, isLoading, error } = this.state;
    const shouldRenderLoadMoreButton = images.length > 0 && !isLoading;

    return (
      <>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        <Searchbar onSubmit={this.onChangeQuery} />
        <ImageGallery images={this.state.images} />
        {isLoading && (
          <Loader
            type="Hearts"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        )}
        {shouldRenderLoadMoreButton && (
          <button type="button" onClick={this.fetchImages}>
            Загрузить ещё
          </button>
        )}
      </>
    );
  }
}
export default App;
