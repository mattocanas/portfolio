import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './styles/Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

const Header = () => {
    return (
        <>
            <Navbar className="justify-content-end" bg="light" variant="light">
            <Nav>
                <Nav.Item>
                    <Nav.Link href="/">about</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link href="/projects">projects</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link href="/contact">contact</Nav.Link>
                </Nav.Item>
            </Nav>
            </Navbar>
        </>
    );
};

export default Header;