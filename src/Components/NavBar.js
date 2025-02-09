import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Tobiaz-Korvin</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/game">Games</Nav.Link>
          <Nav.Link as={Link} to="/movie">Movies</Nav.Link>
          <Nav.Link as={Link} to="/show">Series</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;