import type { ComponentSettings, Manager } from "@managed-components/types";
import { ticTacToeComponent } from "./component";
import { aiMoveRoute } from "@/routes/ai-move.route";
import { moveHandler } from "@/handlers/move.handler";
import { resetHandler } from "@/handlers/reset.handler";
import { startGameHandler } from "@/handlers/start-game.handler";
import { initHandler } from "@/handlers/init.handler";

/**
 * Managed Component registration
 *
 * - game widget
 * - event listeners
 * - AI move route
 * - serve assets
 */
export default async function (manager: Manager, settings: ComponentSettings) {
  // Register game widget
  manager.registerWidget(() => ticTacToeComponent(manager, settings));

  // Events
  manager.addEventListener("init", async ({ client }) => {
    const res = await initHandler(manager, client.get("clientId") as string);
    client.return(res);
  });

  manager.addEventListener("start", async ({ client, payload }) => {
    const res = await startGameHandler(
      manager,
      client.get("clientId") as string,
      payload.playerType,
    );
    client.return(res);
  });

  manager.addEventListener("move", async ({ client, payload }) => {
    const res = await moveHandler(
      manager,
      client.get("clientId") as string,
      payload,
    );
    client.return(res);
  });

  manager.addEventListener("reset", async ({ client }) => {
    const res = await resetHandler(manager, client.get("clientId") as string);
    client.return(res);
  });

  // computer move route
  manager.route("/ai-move", aiMoveRoute(manager, settings));

  // static files
  manager.serve("/public", "assets");
}
