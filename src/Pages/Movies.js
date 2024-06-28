
import { MoviesProvider } from '../Components/MoviesContext';
import MovieLayout from '../Components/Movie';
import '../App.css'


function MoviePage() {
  return (

    <MoviesProvider>
    <div>
      <div className="header" style={{marginTop: '6rem'}}>
      <h1>Favorite Movies</h1>
      </div>
    <MovieLayout/>
            </div>
          
        </MoviesProvider>
  )
}

export default MoviePage;



