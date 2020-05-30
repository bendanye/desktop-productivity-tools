import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class NavBar extends React.Component {
    render() {    
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand as={Link} to="/">Desktop Productivity Tools</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/link">Link</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}