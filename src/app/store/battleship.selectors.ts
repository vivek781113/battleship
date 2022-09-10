import { createSelector } from '@reduxjs/toolkit';
import { BattleshipState } from './battleship.slice';

const selectSelf = (state: BattleshipState) => state;
const battlefieldSelector = createSelector(
  selectSelf,
  (state) => state.battleField
);
const flotillaSelector = createSelector(selectSelf, (state) => state.flotilla);
const hitsSelector = createSelector(selectSelf, (state) => state.hits);
const shotsSelector = createSelector(selectSelf, (state) => state.shots);

export { battlefieldSelector, flotillaSelector, hitsSelector, shotsSelector };
