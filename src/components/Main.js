import React from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import { SearchForm } from './SearchForm';
import { SearchResults } from './SearchResults';

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mapData: null };
  }

  getMapData = async (userInput) => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_API_KEY}&q=${userInput}&format=json`;
    try {
      let response = await axios.get(url);
      this.setState({ mapData: response.data });
    } catch(e) {
      console.error(e);
      this.state = { mapData: null };
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
      </>
    );
  }
}
