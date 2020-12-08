import React, { Component } from 'react';
// import axios from 'axios';
import Loader from 'react-loader-spinner';
import articlesApi from './services/articlesApi';

const ArticleList = ({ articles }) => (
  <ul>
    {articles.map(({ objectID, url, title }) => (
      <li key={objectID}>
        <a href={url} target="_blank" rel="noreferrer noopener">
          {title}
        </a>
      </li>
    ))}
  </ul>
);

class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
  };

  // componentDidMount() {
  //   this.setState({ isLoading: true });

  //   axios
  //     .get('https://hn.algolia.com/api/v1/search?query=react')
  //     .then(response => this.setState({ articles: response.data.hits }))
  //     .catch(error => this.setState({ error }))
  //     .finally(() => this.setState({ isLoading: false }));
  // }

  componentDidMount() {
    this.setState({ isLoading: true });

    articlesApi
      .fetchArticlesWithQuery('react')
      .then(articles => this.setState({ articles }))
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { articles, isLoading, error } = this.state;

    return (
      <>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && (
          <Loader
            type="TailSpin"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        )}
        {articles.length > 0 && <ArticleList articles={articles} />}
      </>
    );
  }
}
export default App;
