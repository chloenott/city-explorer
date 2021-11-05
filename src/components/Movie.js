import React from 'react';

export default class Movie extends React.Component {
  render() {
    return <tr>{Object.values(this.props.movie).map( (td, j) => <td key={j}>{td}</td> )}</tr>
  }
}