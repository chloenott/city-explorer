import React from 'react';
import { Container, Table } from 'react-bootstrap';

export default class Weather extends React.Component {
  render() {
    return (
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
                {this.props.weatherData.map( (forecast, i) => {
                  return (<tr key={i}>
                    <td>{forecast.date}</td>
                    <td>{forecast.description}</td>
                  </tr>)
                })}
              </tbody>
            </Table>
          </div>
        </Container>
    );
  }
}