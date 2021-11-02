import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ResultsCard from './ResultsCard';

export class SearchResults extends React.Component {
  render() {
    return (
        <Container>
          <div id="results-content">
            <h2>Search Results</h2>
            <Row id="results-content-row">
              {this.props.mapData && this.props.mapData.map( (mapDataObj, i) => {
                  return <ResultsCard key={i} data={this.props.mapData[i]}/>
                })}
            </Row>
          </div>
        </Container>
    );
  }
}