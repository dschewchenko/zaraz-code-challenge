import { TypeEnum } from "./type.enum";
import { cellToString, coordinatesToIndex, indexToCoordinates } from "./utils";

/**
 * Class describes board for game
 */
export class Board {
  private board: TypeEnum[] = [];

  constructor(private readonly size: number) {
    this.size = size;
    this.reset();
  }

  getBoard(): TypeEnum[] {
    return this.board;
  }

  setBoard(board: TypeEnum[]) {
    if (board.length !== this.size * this.size) {
      throw new Error("Board size is not correct");
    }

    this.board = board;
  }

  getSize() {
    return this.size;
  }

  getCell(x: number, y: number): TypeEnum {
    return this.board[coordinatesToIndex(x, y, this.size)];
  }

  setCell(x: number, y: number, type: TypeEnum) {
    this.board[coordinatesToIndex(x, y, this.size)] = type;
  }

  reset() {
    this.board = Array(this.size * this.size).fill(TypeEnum.Unspecified);
  }

  /**
   * Will print board like this:
   *   [O X X]
   *   [X   O]
   *   [X O  ]
   */
  toString(): string {
    return this.board.reduce((acc, type, index) => {
      const { x } = indexToCoordinates(index, this.size);
      const start = x === 0 ? "[" : "";
      const end = x === 0 ? "\n" : "";

      return `${acc}${start}${cellToString(type)}${end}`;
    }, "");
  }
}
