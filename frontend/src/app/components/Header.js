import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';

import styled from 'styled-components';

class Header extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/" href="/" id="logo-link">
                            <img id="navbar-logo" src="img/logo.png" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle id="burger-btn" />
                </Navbar.Header>

                <Navbar.Collapse id="menu-items-container">
                    <Nav pullRight id="menu-items">
                        <NavItem
                            key={1}
                            onClick={() => browserHistory.push('/whats-this')}>
                            What's this?
                        </NavItem>
                        <NavItem
                            key={2}
                            onClick={() => browserHistory.push('/about')}>
                            About Us
                        </NavItem>
                        <NavItem
                            key={3}
                            onClick={() => browserHistory.push('/contact')}>
                            Contact
                        </NavItem>
                        <NavItem
                            key={4}
                            onClick={() => browserHistory.push('/impressum')}>
                            Imprint
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;
