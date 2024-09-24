import type { TypeEnum } from "./type.enum";

export interface GameState {
  size: number;
  playerType: TypeEnum;
  turn: number;
  board: TypeEnum[];
}
