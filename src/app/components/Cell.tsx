import React from 'react';
import { useDispatch } from 'react-redux';
import hit from './../../assets/img/Hit.png';
import miss from './../../assets/img/Miss.png';
import { battleshipActions } from '../store/battleship.slice';

export const Cell: React.FC<any> = ({ cellState, x, y }) => {
  const dispatch = useDispatch();
  const {
    updateBattleField,
  } = battleshipActions;

  const cellClick = (x, y, cellState) => {
    if (cellState !== 'miss' && cellState !== 'hitted') {
      // onCellClick(x, y);
      dispatch(updateBattleField({ x, y }));
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
