import React from 'react';
import { Card } from 'react-bootstrap';

export default class ResultsCard extends React.Component {
  render() {
    return (
      <Card style={{ maxWidth: '18rem' }} onClick={() => this.props.getWeatherData(this.props.data)}>
        <Card.Img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_API_KEY}&center=${this.props.data.lat},${this.props.data.lon}&zoom=${10}`} />
        <Card.Body>
          <Card.Title>{this.props.data.display_name}</Card.Title>
          <Card.Text>{Number(this.props.data.lat).toFixed(5)}, {Number(this.props.data.lon).toFixed(5)}</Card.Text>
          <Card.Text onClick={() => this.props.getWeatherData(this.props.data)} style={{ color: 'blue' }}>Click for Weather</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}