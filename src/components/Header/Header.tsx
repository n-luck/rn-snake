import { TouchableOpacity, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/colors";
import { FontAwesome } from "@expo/vector-icons";
import * as Updates from "expo-updates";
import { ReactNode, useEffect } from "react";

import styles from "./styles";

type HeaderProps = {
  reloadGame: () => void;
  pauseGame: () => void;
  children: ReactNode;
  isPaused: boolean;
};

export const Header = ({
  children,
  reloadGame,
  pauseGame,
  isPaused,
}: HeaderProps) => {
  const { currentlyRunning, isUpdateAvailable, isUpdatePending } =
    Updates.useUpdates();

  useEffect(() => {
    if (isUpdatePending) {
      // Update has successfully downloaded; apply it now
      Updates.reloadAsync();
    }
  }, [isUpdatePending]);

  const showDownloadButton = isUpdateAvailable;

  // Show whether or not we are running embedded code or an update
  const runTypeMessage = currentlyRunning.isEmbeddedLaunch
    ? "This app is running from built-in code"
    : "This app is running an update";

  return (
    <View style={styles.container}>
      {/* <Text style={styles.message}>{runTypeMessage}</Text> */}
      <TouchableOpacity onPress={reloadGame}>
        <Ionicons name="reload-circle" size={35} color={Colors.primary} />
      </TouchableOpacity>

      {/* <TouchableOpacity onPress={Updates.checkForUpdateAsync}>
        <FontAwesome name={"refresh"} size={35} color={Colors.primary} />
      </TouchableOpacity> */}

      {/* {showDownloadButton ? (
        <TouchableOpacity onPress={Updates.fetchUpdateAsync}>
          <FontAwesome name={"check"} size={35} color={Colors.primary} />
        </TouchableOpacity>
      ) : null} */}

      <TouchableOpacity onPress={pauseGame}>
        <FontAwesome
          name={isPaused ? "play-circle" : "pause-circle"}
          size={35}
          color={Colors.primary}
        />
      </TouchableOpacity>
      {children}
    </View>
  );
};
