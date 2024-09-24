import type { AiMoveDto } from "./ai-move-dto";
import { simpleAiMove } from "./simple-ai";

/**
 * It's Tic-Tac-Toe worker
 * For now it responds with a random move
 */
export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    const method = request.method;

    if (method === "POST" && url.pathname === "/ai-move") {
      try {
        const body = (await request.json()) as AiMoveDto;

        const result = simpleAiMove(body.board, body.playerType);
        return new Response(JSON.stringify(result), {
          status: 200,
          headers: {
            "Content-Type": "application/json"
          }
        });
      } catch (error) {
        console.error(error);
        return new Response("Bad request", { status: 400 });
      }
    }

    return new Response("Not found", { status: 404 });
  }
} satisfies ExportedHandler<Env>;
