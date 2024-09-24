import { Manager } from "@managed-components/types";
import { Game } from "@/game/game";
import { tryParseJSON } from "@/utils/json";
import { GameState } from "@/game/state";

export const setState = async (
  manager: Manager,
  clientId: string,
  game: Game,
) => {
  const state = game.getState();
  await manager.set("gameState__" + clientId, JSON.stringify(state));
  return state;
};

export const getState = async (manager: Manager, clientId: string) => {
  const gameState = await manager.get("gameState__" + clientId);
  return tryParseJSON<GameState>(gameState ?? "");
};

export const restoreState = async (
  manager: Manager,
  clientId: string,
  game: Game,
) => {
  const state = await getState(manager, clientId);
  if (state) game.setState(state);

  return state;
};

export const stateResponse = (game: Game) => ({
  state: game.getState(),
  hasEmptyCells: game.hasEmptyCells(),
  winner: game.winState(),
  whoseTurn: game.whoseTurn(),
});
