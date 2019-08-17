import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'


class Menu extends React.Component{
    render(){
        return(
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Bretagne Pompes Services</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Accueil</Nav.Link>
                <Nav.Link href="#society">Société</Nav.Link>
                <Nav.Link href="#knowledge">Savoir-Faire</Nav.Link>
                <Nav.Link href="#services">Services</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Menu