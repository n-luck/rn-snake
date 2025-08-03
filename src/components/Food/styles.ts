import { StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

const styles = StyleSheet.create({
  food: {
    borderStyle: "solid",
    borderColor: "transparent",
    borderBottomColor: Colors.tertiary,
    borderWidth: 7,
    borderTopWidth: 0,
    height: 0,
    width: 7,
    boxSizing: "content-box",
    position: "relative",
  },
  diamond: {
    position: "absolute",
    top: 7,
    left: -7,
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderColor: "transparent",
    borderTopColor: Colors.tertiary,
    borderTopWidth: 12,
    borderRightWidth: 10,
    borderBottomWidth: 0,
    borderLeftWidth: 10,
  },
});

export default styles;
