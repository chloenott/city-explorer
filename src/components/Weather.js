import React from 'react';
import { Container, Table } from 'react-bootstrap';
import axios from 'axios';

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: null
    };
  }

  componentDidUpdate = ({userSelection}) => {
    if (this.props.userSelection !== userSelection) {
      userSelection && this.getWeatherData(this.props.userSelection)
    }
  }

  getWeatherData = async ({display_name, lat, lon}) => {
    const url = `${process.env.REACT_APP_SERVER_URL}/weather?searchQuery=${display_name}&lat=${lat}&lon=${lon}`;
    try {
      let response = await axios.get(url);
      this.setState({ weatherData: response.data });
    } catch(error) {
      this.setState({ weatherData: null });
      this.props.errorHandler(error.toString());
    }
  }

  render() {
    const { weatherData } = this.state
    return (
      weatherData && (
        <Container>
          <div id="results-content">
            <h2>Weather Forecast</h2>
            <h5 id="weather-location">{this.props.userSelection.display_name}</h5>
            <Table>
              <thead>
                <tr>
                  <td>Date</td>
                  <td>Description</td>
                </tr>
              </thead>
              <tbody>
                {weatherData.map( (forecast, i) => {
                  return (<tr key={i}>
                    <td>{forecast.date}</td>
                    <td>{forecast.description}</td>
                  </tr>)
                })}
              </tbody>
            </Table>
          </div>
        </Container>
      )
    );
    
  }
}