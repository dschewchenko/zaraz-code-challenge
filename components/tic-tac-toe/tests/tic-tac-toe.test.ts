import { Game } from "@/game/game";
import { TypeEnum } from "@/game/type.enum";
import { WinTypeEnum } from "@/game/win-type.enum";
import { expect, suite, test } from "vitest";
import {
  board,
  winnerBoardDiagonal,
  winnerBoardHorizontal,
  winnerBoardVertical,
} from "./mocks";

suite("TicTacToe Game", () => {
  test("should be correct state on initialization", () => {
    const game = new Game(3);

    expect(game.getState()).toEqual({
      size: 3,
      board,
      playerType: TypeEnum.Unspecified,
      turn: 0,
    });
  });

  test("should restore state correctly", () => {
    const game = new Game(3);
    game.setState({
      board,
      playerType: TypeEnum.X,
      turn: 0,
    });

    expect(game.getState()).toEqual({
      size: 3,
      board,
      playerType: TypeEnum.X,
      turn: 0,
    });
  });

  test("should return winner for horizontal", () => {
    const game = new Game(3);
    game.setState({
      board: winnerBoardHorizontal,
      playerType: TypeEnum.X,
      turn: 0,
    });

    expect(game.winState()).toEqual({
      player: TypeEnum.X,
      type: WinTypeEnum.Horizontal,
    });
  });

  test("should return winner for vertical", () => {
    const game = new Game(3);
    game.setState({
      board: winnerBoardVertical,
      playerType: TypeEnum.X,
      turn: 0,
    });

    expect(game.winState()).toEqual({
      player: TypeEnum.X,
      type: WinTypeEnum.Vertical,
    });
  });

  test("should return winner for diagonal", () => {
    const game = new Game(3);
    game.setState({
      board: winnerBoardDiagonal,
      playerType: TypeEnum.X,
      turn: 0,
    });

    expect(game.winState()).toEqual({
      player: TypeEnum.X,
      type: WinTypeEnum.Diagonal,
    });
  });

  test("should return unspecified for no winner", () => {
    const game = new Game(3);
    game.setState({
      board,
      playerType: TypeEnum.X,
      turn: 0,
    });

    expect(game.winState()).toEqual({
      player: TypeEnum.Unspecified,
      type: WinTypeEnum.Unspecified,
    });
  });
});
