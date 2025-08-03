import { StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
    flex: 1,
  },
  gameArea: {
    flex: 1,
    borderColor: Colors.secondary,
    borderWidth: 12,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: Colors.background,
  },
  scoreContainer: {
    display: "flex",
    alignItems: "center",
  },
  scoreTitle: {
    color: Colors.primary,
  },
  score: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.primary,
  },
});

export default styles;
