import React from 'react';
import axios from 'axios';
import { DisplayResults } from './DisplayResults';
import { SearchForm } from './SearchForm';

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mapData: null };
  }

  getMapData = async (userInput) => {
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_API_KEY}&q=${userInput}&format=json`;
    let response = await axios.get(url);
    this.setState({ mapData: response.data[0] });
  };

  render() {
    return (
      <>
        <SearchForm getMapData={this.getMapData} />
        {this.state.mapData && <DisplayResults data={this.state.mapData} />}
      </>
    );
  }
}
