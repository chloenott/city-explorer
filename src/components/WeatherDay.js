import React from 'react';

export default class WeatherDay extends React.Component {
  render() {
    const {date, description} = this.props
    return (
        <tr>
            <td>{date}</td>
            <td>{description}</td>
        </tr>
    )
  }
}