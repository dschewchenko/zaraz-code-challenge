import { Manager } from "@managed-components/types";
import { restoreState, stateResponse } from "@/utils/game-state";
import { Game } from "@/game/game";

export const initHandler = async (manager: Manager, clientId: string) => {
  const game = new Game(3);
  await restoreState(manager, clientId, game);

  return stateResponse(game);
};
