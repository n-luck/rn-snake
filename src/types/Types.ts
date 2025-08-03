export type GestureEventType = {
  translationX: number;
  translationY: number;
};

export type Coordinate = {
  x: number;
  y: number;
};

export enum Direction {
  Right,
  Left,
  Down,
  Up,
}
