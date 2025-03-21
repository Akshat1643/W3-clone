import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../styles/W3_navbar.css";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import "./Navmodals"


import Navmodals from './Navmodals';


function W3_navbar() {
  return (
    <section className=' container'>
        <Navbar expand="lg "  >
      <Container className='d-flex justify-content-between'>
        <img className='W3_logo' src="https://www.w3villa.com/production/assets/logo-1-0cf06f8aef88f5778904cc40290b18da01c6cf5bff74594cb3b2fc4d0a353acf.webp" alt="" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='ms-auto' id="basic-navbar-nav">
          <Nav className=" ms-auto items gap-4">
            <Navmodals content="Artificial Intelligence"/>
            <Navmodals content="Services"/>
            <Navmodals content="Technologies"/>
            <Navmodals content="Solutions"/>
            <Navmodals content="Company"/>
            <Navmodals content="Career"/>
            <Navmodals content="Blog"/>
           
            <Button variant="primary">ENQUIRY</Button>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </section>
  );
}

export default W3_navbar;