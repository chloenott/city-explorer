import React from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import ErrorMessage from './ErrorMessage';
import Weather from './Weather';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mapData: null, weatherData: null, error: '' };
  }

  getMapData = async (userInput) => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_API_KEY}&q=${userInput}&format=json`;
    try {
      let response = await axios.get(url);
      this.setState({ mapData: response.data, weatherData: null, error: '' })
    } catch(e) {
      this.setState({ mapData: null, userSelection: null, weatherData: null, error: e.toString() })
    }
  };

  getWeatherData = async (userSelection) => {
    const url = `${process.env.REACT_APP_SERVER_URL}/weather?searchQuery=${userSelection.display_name}&lat=${userSelection.lat}&lon=${userSelection.lon}`;
    try {
      let response = await axios.get(url);
      console.log(userSelection, response)
      this.setState({ userSelection: userSelection, weatherData: response.data, error: '' })
    } catch(e) {
      this.setState({ userSelection: null, weatherData: null, error: e.toString() })
    }
  }

  render() {
    return (
      <>
        <Container id="main-container">
          <div id="form-content">
            <SearchForm getMapData={this.getMapData} />
          </div>
        </Container>
        {this.state.error && <ErrorMessage error={this.state.error}></ErrorMessage>}
        {this.state.weatherData && <Weather userSelection={this.state.userSelection} weatherData={this.state.weatherData}></Weather>}
        {this.state.mapData && <SearchResults mapData={this.state.mapData} getWeatherData={this.getWeatherData}></SearchResults>}
      </>
    );
  }
}
