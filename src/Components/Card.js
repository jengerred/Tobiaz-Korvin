import { useContext } from 'react';
import { CardsContext } from './CardsContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CardLayout() {
  const { cards } = useContext(CardsContext);

  return (
<div className="cards-container">
    {cards.map((card) => (
    <Card key={card.id} className="Cards">
      <Card.Img variant="top" src= {card.src} />
      <Card.Body style={{ background: 'black'}}>
        <Card.Title className="header">{card.title}</Card.Title>
        <Card.Text>
        {card.text}
        </Card.Text>
        <Button variant="danger">Go somewhere</Button>
      </Card.Body>
    </Card>
     ))}

     </div>

  );
}

export default CardLayout;