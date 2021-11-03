import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ResultsCard from './ResultsCard';

export default class SearchResults extends React.Component {
  render() {
    const { searchResults, updateUserSelection, errorHandler } = this.props
    return (
        searchResults && (
            <Container>
            <div id="results-content">
                <h2>Search Results</h2>
                <Row id="results-content-row">
                {searchResults.map( (searchResult, i) => {
                    return <ResultsCard key={i} data={searchResult} updateUserSelection={updateUserSelection} errorHandler={errorHandler}/>
                    })}
                </Row>
            </div>
            </Container>
        )
    );
  }
}