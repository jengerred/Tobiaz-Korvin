import React from 'react';
import { createContext, useState } from 'react';



const ShowsContext = createContext();

const ShowsProvider = function ({ children })  {
  const [shows, setShows] = useState([
    {
      id: 1,
      title: 'Ninjago',
      text: 'Watch this series now',
    src: '/Ninjago.png',
    to: 'https://tubitv.com/series/4718/lego-ninjago-masters-of-spinjitzu?start=true&tracking=google-feed&utm_source=google-feed',
    link:  'Watch Now',
    },
    {
        id: 2,
        title: 'Lab Rats',
        text: 'A great classic!',
      src: '/LabRats.png',
      to: 'https://www.disneyplus.com/browse/entity-58418603-cca7-47d2-881f-b905aec16f1d',
      link:  'Watch Now',
      },
      {
        id: 3,
        title: 'Bel Air',
        text: 'A talented West Philly teenager is sent to live in Bel Air to avoid the dangers of his hometown.',
      src: '/BelAir.png',
      to: 'https://www.peacocktv.com/watch/asset/tv/bel-air/5827147521039228112',
      link:'Watch Now',
      },
    
   
  
    // Add more cards here...
  ]);

  return (
    <ShowsContext.Provider value={{ shows, setShows }}>
      {children}
    </ShowsContext.Provider>
  );
};

export { ShowsProvider, ShowsContext };