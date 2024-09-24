import { TypeEnum } from "@/game/type.enum";

// empty board
export const board = [
  TypeEnum.Unspecified,
  TypeEnum.Unspecified,
  TypeEnum.Unspecified,
  TypeEnum.Unspecified,
  TypeEnum.Unspecified,
  TypeEnum.Unspecified,
  TypeEnum.Unspecified,
  TypeEnum.Unspecified,
  TypeEnum.Unspecified,
];

/**
 * [  O  ]
 * [X X X]
 * [O    ]
 */
export const winnerBoardHorizontal = [
  TypeEnum.Unspecified,
  TypeEnum.O,
  TypeEnum.Unspecified,
  TypeEnum.X,
  TypeEnum.X,
  TypeEnum.X,
  TypeEnum.O,
  TypeEnum.Unspecified,
  TypeEnum.Unspecified,
];

/**
 * [  X O]
 * [  X  ]
 * [O X  ]
 */
export const winnerBoardVertical = [
  TypeEnum.Unspecified,
  TypeEnum.X,
  TypeEnum.O,
  TypeEnum.Unspecified,
  TypeEnum.X,
  TypeEnum.Unspecified,
  TypeEnum.O,
  TypeEnum.X,
  TypeEnum.Unspecified,
];

/**
 * [O   X]
 * [  X  ]
 * [X O  ]
 */
export const winnerBoardDiagonal = [
  TypeEnum.O,
  TypeEnum.Unspecified,
  TypeEnum.X,
  TypeEnum.Unspecified,
  TypeEnum.X,
  TypeEnum.Unspecified,
  TypeEnum.X,
  TypeEnum.O,
  TypeEnum.Unspecified,
];
