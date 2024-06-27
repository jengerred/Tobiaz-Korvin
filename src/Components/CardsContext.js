import React from 'react';
import { createContext, useState } from 'react';


const CardsContext = createContext();

const CardsProvider = function ({ children })  {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: 'favorite games',
      text: 'Example of where you can store your favorite links ot games or build your own!',
    src: '/Roblox.png'
    },
    {
        id: 2,
        title: 'Cool Movies',
        text: 'Example of where you can store your favorite links ot games or build your own!',
      src: '/Roblox.png'
      },
      {
        id: 3,
        title: 'Sweet Shows',
        text: 'Example of where you can store your favorite links ot games or build your own!',
      src: '/Roblox.png'
      },
      {
        id: 4,
        title: 'Music',
        text: 'Example of where you can store your favorite links ot games or build your own!',
      src: '/Roblox.png'
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