import { TypeEnum } from "./type.enum";

export function coordinatesToIndex(x: number, y: number, size: number): number {
  return x * size + y;
}

export function indexToCoordinates(
  index: number,
  size: number,
): { x: number; y: number } {
  return {
    x: index % size,
    y: Math.floor(index / size),
  };
}

export function cellToString(cell: TypeEnum): string {
  switch (cell) {
    case TypeEnum.X:
      return "X";
    case TypeEnum.O:
      return "O";
    case TypeEnum.Unspecified:
      return " ";
  }
}
