import React from 'react';
import hit from './../../assets/img/Hit.png';
import miss from './../../assets/img/Miss.png';

export const Cell: React.FC<any> = ({ cellState, onCellClick, x, y }) => {
  const cellClick = (x, y, cellState) => {
    if (cellState !== 'miss' && cellState !== 'hitted') {
      onCellClick(x, y);
    }
  };
  return (
    <div onClick={() => cellClick(x, y, cellState)} className="cellStyle">
      {cellState === 'miss' && (
        <img
          src={miss}
          className="miss"
          alt="miss"
          width="auto"
          height="auto"
        />
      )}
      {cellState === 'hitted' && (
        <img
          src={hit}
          className="hitted"
          alt="hitted"
          width="auto"
          height="auto"
        />
      )}
    </div>
  );
};
