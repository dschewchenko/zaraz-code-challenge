import { Manager } from "@managed-components/types";
import { setState, stateResponse } from "@/utils/game-state";
import { Game } from "@/game/game";
import { TypeEnum } from "@/game/type.enum";

export const startGameHandler = async (
  manager: Manager,
  clientId: string,
  playerType: TypeEnum,
) => {
  const game = new Game(3);
  game.setPlayerType(playerType);
  await setState(manager, clientId, game);

  return stateResponse(game);
};
