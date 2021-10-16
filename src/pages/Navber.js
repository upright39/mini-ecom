import React from 'react';

import { Navbar, Container, Nav, FormControl, Form } from 'react-bootstrap'
import { Link } from "react-router-dom"

import mylogo2 from "../images/mylogo2.jpg";

const Navber = () => {
    return (


        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" >
            <Container >

                <Navbar.Brand href="#"><img src={mylogo2} className="logo" alt="logo.." /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">

                    <Nav className="me-auto my-2 my-lg-0" >
                        <Nav.Link as={Link} to={'/'}>HOME PAGE</Nav.Link>
                        <Nav.Link as={Link} to={'/contact'}>CONTACT US</Nav.Link>
                        <Nav.Link as={Link} to={'/about'}>ABOUT US</Nav.Link>
                        <Nav.Link as={Link} to={'/basket'}>BASKET</Nav.Link>
                    </Nav>

                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />

                    </Form>
                </Navbar.Collapse>

            </Container>

        </Navbar>
    )
}

export default Navber
