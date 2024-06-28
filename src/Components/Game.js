import { useContext } from 'react';
import { GamesContext } from './GamesContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function GameLayout() {
  const { games } = useContext(GamesContext);

  return (
<div className="cards-container">
    {games.map((game) => (
    <Card key={game.id} className="Cards">
      <Card.Img variant="top" className="image" src= {game.src} />
      <Card.Body style={{ background: 'black'}}>
        <Card.Title className="header2">{game.title}</Card.Title>
        <Card.Text className="text">
        {game.text}
        </Card.Text>
        <Button variant="danger" className="btn"><Nav.Link as={Link} to={game.to} target="_blank" rel="noopener noreferrer">{game.link}</Nav.Link></Button>
      </Card.Body>
    </Card>
     ))}

     </div>

  );
}

export default GameLayout;