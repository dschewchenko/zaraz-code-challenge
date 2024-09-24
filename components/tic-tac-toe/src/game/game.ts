import { Board } from "./board";
import type { GameState } from "./state";
import { TypeEnum } from "./type.enum";
import { indexToCoordinates } from "./utils";
import { WinTypeEnum } from "./win-type.enum";

/**
 * Class describes TicTacToe game.
 *
 * It's responsible for:
 * - creating game board
 * - game state
 * - game logic
 * - making moves
 */
export class Game {
  /**
   * Game board instance
   */
  private readonly board: Board;
  /**
   * User's type in game (X or O)
   */
  private playerType: TypeEnum = TypeEnum.Unspecified;
  /**
   * Current turn number
   */
  private turn: number;

  constructor(size: number) {
    this.board = new Board(size);
    this.turn = 0;
  }

  /**
   * Use this method to get game state for saving in file or database
   */
  getState(): GameState {
    return {
      size: this.board.getSize(),
      board: this.board.getBoard(),
      playerType: this.playerType,
      turn: this.turn,
    };
  }

  /**
   * Use this method to restore game state
   *
   * For example, after restarting server
   */
  setState({ playerType, turn, board }: Omit<GameState, "size">) {
    this.board.setBoard(board);
    this.playerType = playerType;
    this.turn = turn;
  }

  /**
   * Reset game state
   */
  reset() {
    this.board.reset();
    this.playerType = TypeEnum.Unspecified;
    this.turn = 0;
  }

  /**
   * Get board instance
   */
  getBoard(): Board {
    return this.board;
  }

  /**
   * Get current turn number
   */
  getTurn(): number {
    return this.turn;
  }

  /**
   * Get user's type in game (X or O)
   */
  getPlayerType(): TypeEnum {
    return this.playerType;
  }

  /**
   * Set user's type in game (X or O)
   */
  setPlayerType(type: TypeEnum) {
    this.playerType = type;
  }

  /**
   * Whose turn it is now
   */
  whoseTurn(): TypeEnum {
    return this.turn % 2 === 0 ? TypeEnum.X : TypeEnum.O;
  }

  /**
   * Use this method to make move in game
   */
  makeMove(x: number, y: number, type: TypeEnum): void {
    if (this.canMakeMove(x, y)) {
      this.board.setCell(x, y, type);
      this.turn++;
    }
  }

  /**
   * Check if requested move is possible
   */
  canMakeMove(x: number, y: number): boolean {
    const cell = this.board.getCell(x, y);

    return cell === TypeEnum.Unspecified;
  }

  /**
   * Check if there are empty cells in board
   */
  hasEmptyCells(): boolean {
    return this.board.getBoard().some((type) => type === TypeEnum.Unspecified);
  }

  /**
   * Check if someone won the game and return win type(horizontal, vertical, diagonal)
   */
  winState(): {
    player: TypeEnum;
    type: WinTypeEnum;
  } {
    const board = this.board.getBoard();
    const size = this.board.getSize();
    const lastIndex = size - 1;

    // initialize win counts
    const winMap = {
      [WinTypeEnum.Horizontal]: Array(size).fill(0), // per row
      [WinTypeEnum.Vertical]: Array(size).fill(0), // per column
      [WinTypeEnum.Diagonal]: [0, 0], // per diagonal
    };

    // Traverse board in one loop
    for (let i = 0; i < board.length; i++) {
      const { x, y } = indexToCoordinates(i, size);
      const cell = board[i];

      // we don't need to check empty cells
      if (cell === TypeEnum.Unspecified) continue;

      const value = cell === TypeEnum.X ? 1 : -1;

      // update win counts for each type
      winMap[WinTypeEnum.Horizontal][y] += value;
      winMap[WinTypeEnum.Vertical][x] += value;

      // ↘
      if (x === y) winMap[WinTypeEnum.Diagonal][0] += value;
      // ↙
      if (x + y === lastIndex) winMap[WinTypeEnum.Diagonal][1] += value;

      // Check vertical
      if (this.checkWin(winMap[WinTypeEnum.Vertical][x]))
        return {
          player: winMap[WinTypeEnum.Vertical][x] > 0 ? TypeEnum.X : TypeEnum.O,
          type: WinTypeEnum.Vertical,
        };

      // Check horizontal at the end of the row
      if (x === lastIndex && this.checkWin(winMap[WinTypeEnum.Horizontal][y]))
        return {
          player:
            winMap[WinTypeEnum.Horizontal][y] > 0 ? TypeEnum.X : TypeEnum.O,
          type: WinTypeEnum.Horizontal,
        };
    }

    // Check diagonal wins
    for (let i = 0; i < 2; i++) {
      if (this.checkWin(winMap[WinTypeEnum.Diagonal][i]))
        return {
          player: winMap[WinTypeEnum.Diagonal][i] > 0 ? TypeEnum.X : TypeEnum.O,
          type: WinTypeEnum.Diagonal,
        };
    }

    // if no wins, return unspecified
    return {
      player: TypeEnum.Unspecified,
      type: WinTypeEnum.Unspecified,
    };
  }

  /**
   * Check if sum is equal to board size.
   * For win check.
   */
  private checkWin(sum: number): boolean {
    return Math.abs(sum) === this.board.getSize();
  }
}
