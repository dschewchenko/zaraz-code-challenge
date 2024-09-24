import type { Request } from "express";
import { ComponentSettings, Manager } from "@managed-components/types";
import { TypeEnum } from "@/game/type.enum";

export const aiMoveRoute =
  (manager: Manager, settings: ComponentSettings) =>
  async (request: Request) => {
    if (request.method !== "POST")
      return new Response("Method not allowed", { status: 405 });

    const { playerType, board } = request.body;

    const aiPlayerType = playerType === TypeEnum.X ? TypeEnum.O : TypeEnum.X;
    const resp = await manager
      .fetch(`${settings.apiUrl}/ai-move`, {
        method: "POST",
        body: JSON.stringify({
          // must be opposite to current player
          playerType: aiPlayerType,
          board,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
      ?.then((response) => response?.json());

    return new Response(JSON.stringify(resp), { status: 200 });
  };
