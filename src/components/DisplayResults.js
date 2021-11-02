import React from 'react';
import { ListGroup } from 'react-bootstrap';

export class DisplayResults extends React.Component {
  render() {
    return (
      <ListGroup>
        <ListGroup.Item>City: {this.props.data.display_name}</ListGroup.Item>
        <ListGroup.Item>Latitude: {this.props.data.lat}</ListGroup.Item>
        <ListGroup.Item>Longitude: {this.props.data.lon}</ListGroup.Item>
      </ListGroup>
    );
  }
}
