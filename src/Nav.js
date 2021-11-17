import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import React from 'react';
import AboutUs from './About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link
} from "react-router-dom";


const Navigation = props => {

  return (
    <div>
      <div className="row">
        <div className="col-md-12">

            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
              <Navbar.Brand class='nav-header' to="/home">DJ Sparkbox</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Link to="/">Home</Link>
                  <Link to="/about">About Us</Link>
                  <NavDropdown title="Contact Us" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

          <br />
        </div>
      </div>
    </div>
  )
  // return (
  //   <>
  //     <Navbar>
  //       <Navbar.Header>
  //          React-Bootstrap
  //       </Navbar.Header>
  //       <Nav>
  //         <NavItem>
  //           Link
  //         </NavItem>
  //         <NavItem>
  //           Link
  //         </NavItem>
  //         <NavDropdown  title="Dropdown" id="basic-nav-dropdown">
  //           <NavItem >Action</NavItem>
  //           <NavItem >Another action</NavItem>
  //           <NavItem >Something else here</NavItem>
  //           <NavItem >Separated link</NavItem>
  //         </NavDropdown>
  //       </Nav>
  //     </Navbar>
  //   </>
  // );
}

export default Navigation;