import React from 'react';
import { Container, Form, FormControl, InputGroup, Button } from 'react-bootstrap';
import axios from 'axios';

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValue: ''
    };
  }

  getSearchResults = async (event) => {
    event.preventDefault();
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_API_KEY}&q=${this.state.formValue}&format=json`;
    try {
      let response = await axios.get(url);
      this.props.updateSearchResults(response.data);
    } catch(error) {
      this.props.updateSearchResults(null);
      this.props.errorHandler(error.toString());
    }
  };

  render() {
    return (
      <Container id="main-container">
        <div id="form-content">
          <Form onSubmit={this.getSearchResults}>
            <InputGroup>
              <FormControl
                type="text"
                placeholder='Search for a location'
                defaultValue={this.state.formValue}
                onChange={(event) => this.setState({ formValue: event.target.value })} />
              <Button type="submit">Explore!</Button>
            </InputGroup>
          </Form>
        </div>
      </Container>
    );
  }
}
