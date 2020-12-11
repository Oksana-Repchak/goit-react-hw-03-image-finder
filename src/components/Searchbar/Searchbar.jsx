import { Component } from 'react';

class Searchbar extends Component {
  state = { query: '' };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
    console.log(e.currentTarget.value);
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.query);
    console.log(this.state.query);

    this.setState({ query: '' });
  };

  render() {
    return (
      //   <form onSubmit={this.handleSubmit}>
      //     <input
      //       type="text"
      //       value={this.state.query}
      //       onChange={this.handleChange}
      //     />
      //     <button type="submit">Искать</button>
      //   </form>
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            value={this.state.query}
            onChange={this.handleChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
