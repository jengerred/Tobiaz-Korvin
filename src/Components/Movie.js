import { useContext } from 'react';
import { MoviesContext } from './MoviesContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function MovieLayout() {
  const { movies } = useContext(MoviesContext);

  return (
<div className="cards-container">
    {movies.map((movie) => (
    <Card key={movie.id} className="Cards">
      <Card.Img variant="top" className="image" src= {movie.src} />
      <Card.Body style={{ background: 'black'}}>
        <Card.Title className="header2">{movie.title}</Card.Title>
        <Card.Text className="text">
        {movie.text}
        </Card.Text>
        <Button variant="danger" className="btn"><Nav.Link as={Link} to={movie.to} target="_blank" rel="noopener noreferrer">{movie.link}</Nav.Link></Button>
      </Card.Body>
    </Card>
     ))}

     </div>

  );
}

export default MovieLayout;