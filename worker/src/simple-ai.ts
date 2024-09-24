import { TypeEnum } from "./type.enum";

interface MoveCoords {
  x: number;
  y: number;
}

/**
 * Implementation of simple AI player
 * Just makes random move

 * @param board - game board, just array of cells
 * @param type - AI player type (X or O)
 *
 * @returns - coordinates of move
 */
export function simpleAiMove(board: TypeEnum[], type: TypeEnum): MoveCoords | null {
  const index = findEmptyCell(board);

  // `type` need to use for calculating next move, but for now it's just random move

  // no empty cell, so cannot make move
  if (index === -1) return null;

  const size = Math.sqrt(board.length);

  return {
    x: Math.floor(index / size),
    y: index % size
  };
}

const findEmptyCell = (board: TypeEnum[]) => board.findIndex((type) => type === TypeEnum.Unspecified);
