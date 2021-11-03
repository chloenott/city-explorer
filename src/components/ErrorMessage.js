import { Alert } from 'react-bootstrap';
import React from 'react';
import { Container } from 'react-bootstrap';

export default class ErrorMessage extends React.Component {
    render() {
        return(
            <Container>
                <Alert variant="danger">
                    <Alert.Heading>Error</Alert.Heading>
                    <p>{this.props.error}</p>
                </Alert>
            </Container>
        )
    }
}