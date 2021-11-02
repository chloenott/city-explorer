import React from 'react';
import { Container } from 'react-bootstrap';

export default class ErrorMessage extends React.Component {
    render() {
        return(
            <Container>
                <p>{this.props.errorObj}</p>
            </Container>
        )
    }
}