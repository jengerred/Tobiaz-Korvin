
import { ShowsProvider } from '../Components/ShowsContext';
import ShowLayout from '../Components/Show';
import '../App.css'


function ShowPage() {
  return (

    <ShowsProvider>
    <div>
      <div className="header" style={{marginTop: '6rem'}}>
      <h1>Favorite Series</h1>
      </div>
    <ShowLayout/>
            </div>
          
        </ShowsProvider>
  )
}

export default ShowPage;



