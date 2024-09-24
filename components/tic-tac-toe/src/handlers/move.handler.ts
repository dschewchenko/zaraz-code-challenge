import { Manager } from "@managed-components/types";
import { restoreState, setState, stateResponse } from "@/utils/game-state";
import { Game } from "@/game/game";
import { TypeEnum } from "@/game/type.enum";

export interface MovePayload {
  x: number;
  y: number;
  playerType: TypeEnum;
}

export const moveHandler = async (
  manager: Manager,
  clientId: string,
  payload: MovePayload,
) => {
  const game = new Game(3);
  await restoreState(manager, clientId, game);
  game.makeMove(payload.x, payload.y, payload.playerType);
  await setState(manager, clientId, game);

  return stateResponse(game);
};
