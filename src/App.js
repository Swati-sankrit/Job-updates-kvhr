import React from 'react';
import 'D:/KVHR/organizationwebsite/node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import Information from './components/Information';
import Homepage from './components/Homepage';



const App = ()=>{
  return (
      <BrowserRouter>
       <div className='App'>
         <>
         <Navbar bg="light" expand="lg">
         <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to='/'>Home</Nav.Link>
              <Nav.Link as={Link} to='/about'>About us</Nav.Link>
              <NavDropdown title="Login" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Head Login</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Management Login
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Recruiter Login
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
         </>
         <div>
          <Routes>
            <Route path='/about' element={<Information />}/>
            <Route path='/' element={<Homepage />}/>
          </Routes>
         </div>
       </div>
      </BrowserRouter> 
     
  );
};

export default App;