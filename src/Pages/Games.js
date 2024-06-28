
import { GamesProvider } from '../Components/GamesContext';
import GameLayout from '../Components/Game';
import '../App.css'


function GamePage() {
  return (

    <GamesProvider>
    <div>
      <div className="header" style={{marginTop: '6rem'}}>
      <h1>Favorite Games</h1>
      </div>
    <GameLayout/>
            </div>
          
        </GamesProvider>
  )
}

export default GamePage;



