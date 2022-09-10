import React from 'react';
import { useSelector } from 'react-redux';
import { flotillaSelector } from '../store/battleship.selectors';
import { Hitpoints } from './Hitpoints';

export const Flotilla: React.FC = () => {
  const flotilla = useSelector(flotillaSelector);
  console.log(flotilla);
  return (
    <ul className="flotillaContainer">
      {flotilla?.map((ship, index) => {
        return (
          <li key={index} className="shipItem">
            <img src={ship.icon} className="shipIcon" alt="shipIcon" />
            <Hitpoints
              hitPoints={ship.hitPoints - ship.hits}
              hits={ship.hits}
            />
          </li>
        );
      })}
    </ul>
  );
};
