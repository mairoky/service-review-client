import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className='py-3'>
            {['lg'].map((expand) => (
                <Navbar key={expand} expand={expand} variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to="/">
                            EMIKO
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    EMIKO
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-center flex-grow-1 pe-3">
                                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                                    <Nav.Link as={NavLink} to="/services">Services</Nav.Link>
                                    <Nav.Link as={NavLink} to="/blog">Blog</Nav.Link>
                                </Nav>
                                <Nav>
                                    <Nav.Link href="#">More</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </header>
    );
};

export default Header;