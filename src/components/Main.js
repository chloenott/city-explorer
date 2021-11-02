import React from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { SearchForm } from './SearchForm';
import { SearchResults } from './SearchResults';
import ErrorMessage from './ErrorMessage';

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mapData: null, errorObj: null };
  }

  getMapData = async (userInput) => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_API_KEY}&q=${userInput}&format=json`;
    try {
      let response = await axios.get(url);
      this.setState({ mapData: response.data, errorObj: null })
    } catch(e) {
      this.setState({ mapData: null, errorObj: e.toString() })
    }
  };

  render() {
    return (
      <>
        <Container id="main-container">
          <div id="form-content">
            <SearchForm getMapData={this.getMapData} />
          </div>
        </Container>
        {this.state.mapData && <SearchResults mapData={this.state.mapData}></SearchResults>}
        {this.state.errorObj && <ErrorMessage errorObj={this.state.errorObj}></ErrorMessage>}
      </>
    );
  }
}
