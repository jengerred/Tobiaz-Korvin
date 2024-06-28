import React from 'react';
import { createContext, useState } from 'react';



const GamesContext = createContext();

const GamesProvider = function ({ children })  {
  const [games, setGames] = useState([
    {
      id: 1,
      title: 'Roblox',
      text: 'Play this DRIVING EMPIRE game now!',
    src: '/Roblox.png',
    to: 'https://www.roblox.com/home',
    link:  'Play Roblox',
    },
    {
        id: 2,
        title: 'Fortnite',
        text: 'Create your own fortnite world!',
      src: '/Fortnite.png',
      to: 'https://www.fortnite.com/',
      link:  'Play Fortnite',
      },
      {
        id: 3,
        title: 'Minecraft',
        text: 'Build stuff.',
      src: '/Minecraft.png',
      to: 'https://www.minecraft.net/en-us/msaprofile',
      link:'Play Minecraft',
      },
    
   
  
    // Add more cards here...
  ]);

  return (
    <GamesContext.Provider value={{ games, setGames }}>
      {children}
    </GamesContext.Provider>
  );
};

export { GamesProvider, GamesContext };