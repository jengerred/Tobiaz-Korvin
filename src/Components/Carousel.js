import Carousel from 'react-bootstrap/Carousel';
import Tobiaz from '../Images/Tobiaz.jpeg';


function Pics() {
  return (
    <>
    <Carousel style={{margin: 'auto', maxWidth: '80vw', maxHeight: '50vh'}}>
      <Carousel.Item>
        <img  className="pics" text="First slide" src={Tobiaz}/>
        <Carousel.Caption >
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="pics" text="Second slide" src={Tobiaz}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img  className="pics" text="Third slide" src={Tobiaz}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export default Pics;