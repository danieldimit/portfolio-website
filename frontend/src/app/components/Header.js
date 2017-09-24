import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';

import styled from 'styled-components';

class Header extends Component {

    render() {
        return (
            <div>
                <Navbar inverse collapseOnSelect id="whole-navbar">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/" href="/" id="logo-link">
                                <div id="toskov">TOSKOV</div> &nbsp; <div id="architects"> ARCHITECTS</div>
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle id="burger-btn" />
                    </Navbar.Header>

                    <Navbar.Collapse id="menu-items-container">
                        <Nav pullRight id="menu-items">
                            <NavItem
                                key={1}
                                onClick={() => browserHistory.push('/whats-this')}>
                                About
                            </NavItem>
                            <NavItem
                                key={2}
                                onClick={() => browserHistory.push('/about')}>
                                Projects
                            </NavItem>
                            <NavItem
                                key={3}
                                onClick={() => browserHistory.push('/contact')}>
                                Contact
                            </NavItem>
                            <NavItem
                                id="nav-bim"
                                key={4}
                                onClick={() => browserHistory.push('/impressum')}>
                                BIM
                            </NavItem>
                            <a className="nav-bar-icons"
                               href="mailto:kontakt@fakenewsgraph.de">
                                <i className="fa fa-linkedin-square fa-lg" aria-hidden="true"/>
                            </a>
                            <a className=" nav-bar-icons"
                               href="mailto:kontakt@fakenewsgraph.de">
                                <i className="fa fa-twitter-square fa-lg" aria-hidden="true"/>
                            </a>
                            <a className=" nav-bar-icons"
                               href="mailto:kontakt@fakenewsgraph.de">
                                <i className="fa fa-facebook-square fa-lg" aria-hidden="true"/>
                            </a>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div id="place-holder-4-header"></div>
            </div>
        );
    }
}

export default Header;
