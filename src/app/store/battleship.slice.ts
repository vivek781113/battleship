import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ShipType } from '../models/ship';
import { makeClone } from '../helpers/generateBattleField';

export interface BattleshipState {
  battleField: any;
  flotilla: ShipType[];
  shots: number;
  hits: number;
  maxHits: number;
}

const initialState: BattleshipState = {
  battleField: null,
  flotilla: [],
  shots: 0,
  hits: 0,
  maxHits: 0,
};

export const battleshipSlice = createSlice({
  name: 'Battleship',
  initialState,
  reducers: {
    setFlotilla: (state, { payload }: PayloadAction<ShipType[]>) => {
      state.flotilla = payload;
    },
    setBattlefield: (state, { payload }) => {
      state.battleField = payload;
    },
    setMaxHits: (state, { payload }) => {
      state.maxHits = payload;
    },
    setShots: (state, { payload }) => {
      state.hits = payload;
    },
    setHits: (state, { payload }) => {
      state.shots = payload;
    },
    updateBattleField: (state, { payload }) => {
      let newBattleField = makeClone(state.battleField);

      let newFlotilla = [...state.flotilla];
      let cellValue = state.battleField[payload.x][payload.y];
      if (cellValue >= 100) {
        switch (cellValue) {
          case 100:
            newFlotilla[0].hits = newFlotilla[0].hits + 1;
            break;
          case 200:
            newFlotilla[1].hits = newFlotilla[1].hits + 1;
            break;
          case 300:
            newFlotilla[2].hits = newFlotilla[2].hits + 1;
            break;
          case 400:
            newFlotilla[3].hits = newFlotilla[3].hits + 1;
            break;
          case 500:
            newFlotilla[4].hits = newFlotilla[4].hits + 1;
            break;
        }
        newBattleField[payload.x][payload.y] = 'hitted';
        state.hits += 1;
      } else {
        newBattleField[payload.x][payload.y] = 'miss';
      }
      state.battleField = newBattleField;
      state.flotilla = newFlotilla;
      state.shots += 1;
    },
  },
});

export const { actions: battleshipActions, reducer } = battleshipSlice;
