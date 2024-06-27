
import './App.css';
import { CardsProvider } from '../src/Components/CardsContext';
import CardLayout from '../src/Components/Card';
import Pics from './Components/Carousel';

function App() {
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

export default App;
