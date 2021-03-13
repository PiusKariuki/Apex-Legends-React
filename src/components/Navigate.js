import React from 'react';
import {Nav, Navbar,NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';
import Logo from '../photos/logo3.png'
import '../layout/nav.css';

const Styles = styled.div `
 .navbar{
     background-color: brown;
 }
 .navbar-brand, .navbar-nav .nav-link ,.nav-dropdown{
     color: dodgerblue;
     
     &:hover{
         color: #808080;
     }
 }
 .navbar-nav{
     clear: left;
 }
`;

export const Navigate = () =>(
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">
                <img src={Logo} height="45" width="45" alt=""/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                        </Nav>
                        <NavDropdown className="item" title="Tiers" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="/tier1">Tier 1</NavDropdown.Item>
                            <NavDropdown.Item href="/tier2">Tier 2</NavDropdown.Item>
                            <NavDropdown.Item href="/tier3">Tier 3</NavDropdown.Item>
                        </NavDropdown>
                        <Nav>
                        <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                        </Nav>
                </Navbar.Collapse>
   </Navbar>
    </Styles>
);
