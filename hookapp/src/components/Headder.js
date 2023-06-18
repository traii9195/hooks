import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState, useEffect } from 'react';
// link it's an attribut from react router to move page to page without loading 
import { Link } from 'react-router-dom';

function NavScrollExample({ handleFilter }) {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  const [isNavbarVisible, setNavbarVisible] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFilter({ title, rating });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setNavbarVisible(true);
    } else {
      setNavbarVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar bg="dark" variant="dark" className={isNavbarVisible ? 'fixed-top' : 'fixed-top invisible'}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/Home">Trailer</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="title"
              className="me-2"
              aria-label="Search"
              id="title"
              value={title}
              onChange={handleTitleChange}
            />
            <Form.Control
              type="search"
              placeholder="Rating"
              className="me-2"
              aria-label="Search"
              id="rating"
              value={rating}
              onChange={handleRatingChange}
            />
            <Button variant="outline-success" onClick={handleSubmit}>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
