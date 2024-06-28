import Carousel from 'react-bootstrap/Carousel';
import Tobiaz from '../Images/Tobiaz.png';
import Tobiaz2 from '../Images/Tobiaz2.png';
import Tobiaz3 from '../Images/Tobiaz-3.png';


function Pics() {
  return (
    <>
    <Carousel className="carousel" style={{margin: 'auto', maxWidth: '80vw', maxHeight: '50vh'}}>

      <Carousel.Item className="carousel-item">
        <img  className="pics" text="First slide" src={Tobiaz}/>
      </Carousel.Item>

      <Carousel.Item className="carousel-item">
        <img className="pics" text="Second slide" src={Tobiaz2}/>
      </Carousel.Item>
    


      <Carousel.Item className="carousel-item">
        <img  className="pics" text="Third slide" src={Tobiaz3}/>
      </Carousel.Item>

    </Carousel>
    </>
  );
}

export default Pics;