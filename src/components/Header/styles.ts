import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
  container: {
    flex: 0.05,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 0,
    padding: 15,
    backgroundColor: Colors.background,
  },
  message: {
    position: "absolute",
    bottom: 1,
    left: "35%",
    color: "white",
    fontSize: 10,
  },
});

export default styles;
