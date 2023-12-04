import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import instacartLogo from '../Assets/instacart-logo.png';

export default function TopBar() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand style={{ margin: "0px 0 0 15px" }} href="#home">
                    <img src={instacartLogo} alt="Instacart Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto"> 
                        <Nav.Link style={{ color: "#343538" }} href="#LogIn">Log In</Nav.Link>
                        <Button variant="success" style={{ fontSize: "18px" }}>Sign Up</Button>{' '}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
