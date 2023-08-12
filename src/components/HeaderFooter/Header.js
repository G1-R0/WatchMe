import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBook, faSearch } from '@fortawesome/free-solid-svg-icons';
import './HeaderFooter.css';

function Header() {
    return (
        <header className="header">
            <Navbar expand="lg" variant="dark" bg="dark">
                <Navbar.Brand href="/">watchMe</Navbar.Brand>
                {/* <SearchBar /> */}
                <Nav className="ml-auto">
                    <Nav.Link href="/profile">
                        <FontAwesomeIcon icon={faUser} /> Profile
                    </Nav.Link>
                    <Nav.Link href="/library">
                        <FontAwesomeIcon icon={faBook} /> Library
                    </Nav.Link>
                    <Nav.Link href="/discover">
                        <FontAwesomeIcon icon={faSearch} /> Discover
                    </Nav.Link>
                </Nav>
            </Navbar>
        </header>
    );
}

export default Header;
