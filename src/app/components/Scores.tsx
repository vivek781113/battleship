import React from 'react';
import { useSelector } from 'react-redux';
import { hitsSelector, shotsSelector } from '../store/battleship.selectors';

export const Scores: React.FC<any> = () => {
  const shots = useSelector(hitsSelector);
  const hits = useSelector(shotsSelector);
  return (
    <div className="scorePanel text-center">
      <div className="scoreHits">
        <h2 className="scores">{hits}</h2>
        <hr />
        <p className="scoreText">Hits</p>
      </div>
      <div className="scoreShots">
        <h2 className="scores">{shots}</h2>
        <hr />
        <p className="scoreText">Shots</p>
      </div>
    </div>
  );
};
