import { useContext } from 'react';
import { CardsContext } from './CardsContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function CardLayout() {
  const { cards } = useContext(CardsContext);

  return (
<div className="cards-container">
    {cards.map((card) => (
    <Card key={card.id} className="Cards">
      <Card.Img variant="top" className="image" src= {card.src} />
      <Card.Body style={{ background: 'black'}}>
        <Card.Title className="header2" >{card.title}</Card.Title>
        <Card.Text className="text">
        {card.text}
        </Card.Text>
        <Button variant="danger" className="btn"><Nav.Link as={Link} to={card.to}>{card.link}</Nav.Link></Button>
      </Card.Body>
    </Card>
     ))}

     </div>

  );
}

export default CardLayout;