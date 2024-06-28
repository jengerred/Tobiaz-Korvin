import React from 'react';
import { createContext, useState } from 'react';



const MoviesContext = createContext();

const MoviesProvider = function ({ children })  {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Turning Red',
      text: 'Watch this movie now',
    src: '/TurningRed.png',
    to: 'https://www.disneyplus.com/play/2197b4d6-969e-4491-82c8-fde67341404c',
    link:  'Watch Now',
    },
    {
        id: 2,
        title: 'Diary of A Whimpy Kid',
        text: 'Watch your favorite book come to life!',
      src: '/DiaryOfWhimpyKid.png',
      to: 'https://www.disneyplus.com/play/c3bf1cdf-764a-405a-ba15-124330c5c934',
      link:  'Watch Now',
      },
      {
        id: 3,
        title: 'Elemental',
        text: 'Meet the fire, water, air and land residents of Elemental City.',
      src: '/Elemental.png',
      to: 'https://www.disneyplus.com/play/8b489955-d30c-45b6-90ee-ae70f92bd431',
      link:'Watch Now',
      },
    
   
  
    // Add more cards here...
  ]);

  return (
    <MoviesContext.Provider value={{ movies, setMovies }}>
      {children}
    </MoviesContext.Provider>
  );
};

export { MoviesProvider, MoviesContext };