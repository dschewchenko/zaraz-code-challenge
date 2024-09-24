import { Manager } from "@managed-components/types";
import { setState, stateResponse } from "@/utils/game-state";
import { Game } from "@/game/game";

export const resetHandler = async (manager: Manager, clientId: string) => {
  const game = new Game(3);
  game.reset();
  await setState(manager, clientId, game);

  return stateResponse(game);
};
