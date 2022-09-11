import { ShipType } from '../models/ship';


export interface BattleshipState {
    battleField: any;
    flotilla: ShipType[];
    shots: number;
    hits: number;
    maxHits: number;
}
