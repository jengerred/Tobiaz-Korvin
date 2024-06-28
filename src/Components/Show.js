import { useContext } from 'react';
import { ShowsContext } from './ShowsContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function ShowLayout() {
  const { shows } = useContext(ShowsContext);

  return (
<div className="cards-container">
    {shows.map((show) => (
    <Card key={show.id} className="Cards">
      <Card.Img variant="top" className="image" src= {show.src} />
      <Card.Body style={{ background: 'black'}}>
        <Card.Title className="header2">{show.title}</Card.Title>
        <Card.Text className="text">
        {show.text}
        </Card.Text>
        <Button variant="danger" className="btn"><Nav.Link as={Link} to={show.to} target="_blank" rel="noopener noreferrer">{show.link}</Nav.Link></Button>
      </Card.Body>
    </Card>
     ))}

     </div>

  );
}

export default ShowLayout;