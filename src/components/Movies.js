import React from 'react';
import { Container, Table } from 'react-bootstrap';
import axios from 'axios';
import Movie from './Movie.js';

export default class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesData: null
    };
  }

  componentDidUpdate = ({userSelection}) => {
    if (this.props.userSelection && this.props.userSelection !== userSelection) {
      this.getMoviesData(this.props.userSelection)
    }
  }

  getMoviesData = async ({display_name}) => {
    const city = display_name.split(',')[0];
    const url = `${process.env.REACT_APP_SERVER_URL}/movies?city=${city}`;
    try {
      let response = await axios.get(url);
      this.setState({ moviesData: response.data });
    } catch(error) {
      this.setState({ weatherData: null });
      this.props.errorHandler(error.toString());
    }
  }

  render() {
    const { moviesData } = this.state
    const { userSelection } = this.props
    return (
      moviesData && userSelection && (
        <Container>
          <div id="results-content">
            <h2>Relevant Movies</h2>
            <h5 id="movie-location">{userSelection.display_name}</h5>
            <Table>
              <thead>
                <tr>
                    {Object.keys(moviesData[0]).map( (td, i) => <td key={i}>{td}</td> )}
                </tr>
              </thead>
              <tbody>
                {moviesData.map( (movie, i) => <Movie key={i} movie={movie}/> )}
              </tbody>
            </Table>
          </div>
        </Container>
      )
    );
    
  }
}