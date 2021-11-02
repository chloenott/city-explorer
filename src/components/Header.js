import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

export default class Header extends React.Component {
  render() {
    return (
        <Navbar bg='light'>
            <Container>
                <Navbar.Brand>City Explorer</Navbar.Brand>
                <Nav>
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>Lorem</Nav.Link>
                    <Nav.Link>Ipsum</Nav.Link>
                    <Nav.Link>Dolor</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
  }
}
