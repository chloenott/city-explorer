import React from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import ErrorMessage from './ErrorMessage';
import Weather from './Weather';
import Movies from './Movies';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchResults: null, userSelection: null, error: false };
  }

  updateSearchResults = (searchResults) => {
    this.setState({ searchResults: searchResults, error: false });
  }

  updateUserSelection = (userSelection) => {
    this.setState({ userSelection: userSelection, error: false });
  }

  errorHandler = (error) => {
    this.setState({ userSelection: null, error: error });
  }

  render() {
    const {searchResults, userSelection, error} = this.state;
    return (
      <>
        <SearchForm updateSearchResults={this.updateSearchResults} errorHandler={this.errorHandler} />
        <ErrorMessage error={error} />
        <Weather userSelection={userSelection} errorHandler={this.errorHandler} />
        <Movies userSelection={userSelection} errorHandler={this.errorHandler} />
        <SearchResults searchResults={searchResults} updateUserSelection={this.updateUserSelection} errorHandler={this.errorHandler} />
      </>
    );
  }
}
