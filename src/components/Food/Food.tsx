import { Text, View } from "react-native";
import { Coordinate } from "../../types/Types";

import styles from "./styles";

// const getRandomFruitEmoji = () => {
//   const fruitEmojis = ["🍎", "🍊", "🍋", "🍇", "🍉", "🍓", "🍑", "🍍"];
//   const randomIndex = Math.floor(Math.random() * fruitEmojis.length);
//   return fruitEmojis[randomIndex];
// };

export const Food = ({ x, y }: Coordinate) => {
  return (
    <View style={[{ top: y * 10, left: x * 10 }, styles.food]}>
      <View style={styles.diamond} />
    </View>
  );
};
