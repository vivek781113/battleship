import React from 'react';
import { cloneDeep } from 'lodash';
import { useDispatch } from 'react-redux';
import { battleshipActions } from '../store/battleship.slice';
import { getBattleField } from '../helpers/generateBattleField';
import { shipTypes } from '../constants/constants';

export const StartButton: React.FC<{ text: string }> = ({ text }) => {
  const {
    setBattlefield,
    setFlotilla,
    setHits,
    setShots,
  } = battleshipActions;
  const dispatch = useDispatch();
  const onClick = () => {
    let newFlotilla = cloneDeep(shipTypes);
    dispatch(setBattlefield(getBattleField()));
    dispatch(setHits(0));
    dispatch(setShots(0));
    dispatch(setFlotilla(newFlotilla));
  };
  return (
    <div className="text-center ">
      <div onClick={() => onClick()}>
        {text ? text : <h1>Start new game</h1>}
      </div>
    </div>
  );
};
