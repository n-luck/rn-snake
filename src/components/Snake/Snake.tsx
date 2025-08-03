import { View } from "react-native";

import { Coordinate } from "../../types/Types";

import styles from "./styles";

type SnakeProps = {
  snake: Coordinate[];
};

export const Snake = ({ snake }: SnakeProps) => {
  return (
    <>
      {snake.map((segment, index) => {
        const segmentStyle = {
          left: segment.x * 10,
          top: segment.y * 10,
        };
        return (
          <View key={`Snake-${index}`} style={[styles.snake, segmentStyle]} />
        );
      })}
    </>
  );
};
