import React from 'react';
import { createContext, useState } from 'react';


const CardsContext = createContext();

const CardsProvider = function ({ children })  {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: 'favorite games',
      text: 'Play your favorite games or build your own!',
    src: '/Roblox.png',
    to: '/game',
    link:  'Play Games',
    },
    {
        id: 2,
        title: 'Cool Movies',
        text: 'Watch your favorite movies here!',
      src: '/DiaryOfWhimpyKid.png',
      link: 'Watch A Movie',
      to: '/movie',
      link:  'Watch Now',
      },
      {
        id: 3,
        title: 'Sweet Shows',
        text: 'Binge your favorite shows.',
      src: '/Ninjago.png',
      to: '/show',
      link: 'Binge A Show'
      },
      {
        id: 4,
        title: 'Loud Music',
        text: 'Listen to your favorite playlists.',
      src: '/Roblox.png',
      link: 'Play Songs'
      },
  
    // Add more cards here...
  ]);

  return (
    <CardsContext.Provider value={{ cards, setCards }}>
      {children}
    </CardsContext.Provider>
  );
};

export { CardsProvider, CardsContext };