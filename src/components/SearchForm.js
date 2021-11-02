import React from 'react';
import Button from 'react-bootstrap/Button';
import { Form, FormControl, InputGroup } from 'react-bootstrap';

export class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValue: null
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.getMapData(this.state.formValue);
  };

  getData = () => {
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <InputGroup>
          <FormControl
            type="text"
            placeholder='Search for a location'
            defaultValue={this.state.formValue}
            onChange={(e) => this.setState({ formValue: e.target.value })} />
          <Button type="submit">Explore!</Button>
        </InputGroup>
      </Form>
    );
  }
}
