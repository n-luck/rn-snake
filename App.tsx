import "react-native-gesture-handler";

import { Game } from "./src/components/Game";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView>
      <Game />
    </GestureHandlerRootView>
  );
}
