import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import './Header.css';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    // Handle Logout
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <header className='py-3'>
            {['lg'].map((expand) => (
                <Navbar key={expand} expand={expand}>
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
                                <Nav className="justify-content-end flex-grow-1">
                                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                                    <Nav.Link as={NavLink} to="/services">Services</Nav.Link>
                                    <Nav.Link as={NavLink} to="/blog">Blog</Nav.Link>
                                </Nav>
                                <Nav>
                                    {
                                        !user?.uid ?
                                            <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                                            :
                                            <>
                                                <Nav.Link as={NavLink} to="/my-reviews">My Reviews</Nav.Link>
                                                <Nav.Link as={NavLink} to="/add-service">Add Service</Nav.Link>
                                                <button onClick={handleLogOut} className='btn btn-dark'>Logout</button>
                                            </>
                                    }
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