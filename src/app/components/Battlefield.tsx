import React from 'react';
import { useSelector } from 'react-redux';
import { MAX_HIT_COUT } from '../constants/constants';
import {
  battlefieldSelector,
  hitsSelector,
} from '../store/battleship.selectors';
import { Cell } from './Cell';
import { StartButton } from './StartButton';

export const BattleField: React.FC = () => {
  const battleField = useSelector(battlefieldSelector);
  const hits = useSelector(hitsSelector);
  return (
    <div className="battleFieldPanel">
      {!battleField && (
        <table className={`emptyBattleField`}>
          <tbody>
            <tr>
              <td className="emptyBattleField">
                <StartButton text="" />
              </td>
            </tr>
          </tbody>
        </table>
      )}
      {battleField && hits < MAX_HIT_COUT && (
        <table className={`battlefieldTable `}>
          <tbody>
            {battleField.map((row: any[], x: number) => {
              return (
                <tr key={x}>
                  {row.map((column: any, y: number) => {
                    return (
                      <td key={y} className="tableCell">
                        <Cell x={x} y={y} cellState={column} />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      {hits === MAX_HIT_COUT && (
        <table className={`emptyBattleField `}>
          <tbody>
            <tr>
              <td>
                <div className="text-center">
                  <h1>Game over</h1>
                  <StartButton text="" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};
