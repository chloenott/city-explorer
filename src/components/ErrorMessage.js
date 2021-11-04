import React from 'react';
import { ToastContainer, Toast } from 'react-bootstrap';

export default class ErrorMessage extends React.Component {
    clearError = () => {
        this.props.clearError();
    }

    render() {
        return(
            this.props.error && (
                <ToastContainer position={'middle-end'}>
                    <Toast onClose={() => this.clearError()} show={this.props.error} delay={3000} autohide>
                        <Toast.Body>{this.props.error}</Toast.Body>
                    </Toast>
                </ToastContainer>
            )
        )
    }
}