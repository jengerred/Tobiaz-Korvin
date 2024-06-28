
import '../App.css';
import { CardsProvider } from '../Components/CardsContext';
import CardLayout from '../Components/Card';
import Pics from '../Components/Carousel';

function Home() {
  return (
    <CardsProvider>
    <div>
  <div className="header" style={{marginTop: '6rem'}}>
  <h1>Tobiaz-Korvin</h1>
  </div>
  <Pics/>
  <CardLayout/>
        </div>
      
    </CardsProvider>
  )
}

export default Home;
