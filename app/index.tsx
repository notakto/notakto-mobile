import { useRouter } from "expo-router";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import PixelText from "@/src/components/PixelText";
import { GAME_MODES } from "@/src/constants";
import { useNavigateGameMode } from "@/src/hooks/useNavigationGameMode";
import { auth } from "@/src/lib/firebase";
import { useUser } from "@/src/stores/userStore";
// import { useGlobalModal } from "@/src/stores/globalModalStore";
import type { GameMode } from "@/src/types";

const MenuLayout = ({ children }: { children: React.ReactNode }) => {
  return <View style={styles.container}>{children}</View>;
};

interface GameModeItem {
  mode: Exclude<GameMode, null>;
  title: string;
  description: string;
  icon: string;
  requiresAuth: boolean;
}

export default function Menu() {
  const router = useRouter();
  const startGame = useNavigateGameMode();

  const setUser = useUser((state) => state.setUser);
  const setAuthReady = useUser((state) => state.setAuthReady);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setAuthReady(true);
    });

    return unsubscribe;
  }, [setUser, setAuthReady]);
  //   const { activeModal, openModal, _closeModal } = useGlobalModal();

  return (
    <MenuLayout>
      <View style={styles.content}>
        <View style={styles.titleBlock}>
          <PixelText style={styles.mainTitle}>NOTAKTO</PixelText>

          <PixelText style={styles.subtitle}>NO TIES · ALWAYS A WINNER</PixelText>

          <View style={styles.ruleLine} />
        </View>

        <View style={styles.gameModeList}>
          {(GAME_MODES as GameModeItem[]).map((item) => (
            <Pressable
              key={item.mode}
              onPress={() => startGame(item.mode, item.requiresAuth)}
              style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}>
              <View style={styles.iconBox}>
                <PixelText style={styles.icon}>{item.icon}</PixelText>
              </View>

              <View style={styles.textContainer}>
                <PixelText style={styles.cardTitle}>{item.title}</PixelText>

                <PixelText style={styles.description}>{item.description}</PixelText>
              </View>

              <PixelText style={styles.arrow}>{">"}</PixelText>
            </Pressable>
          ))}
        </View>
        <View>
          <Pressable
            onPress={() => router.push("/settings")}
            style={({ pressed }) => [
              styles.card,
              pressed && styles.cardPressed,
              { marginTop: 16 },
            ]}>
            <View style={styles.iconBox}>
              <PixelText style={styles.icon}>%</PixelText>
            </View>

            <View style={styles.textContainer}>
              <PixelText style={styles.cardTitle}>Setting</PixelText>

              <PixelText style={styles.description}>TAP MORE FOR SETTINGS & OPTIONS</PixelText>
            </View>
          </Pressable>
        </View>
      </View>
    </MenuLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0e0e1a",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  content: {
    width: "100%",
    maxWidth: 672,
    paddingHorizontal: 24,
  },

  titleBlock: {
    alignItems: "center",
    marginBottom: 48,
  },

  mainTitle: {
    fontSize: 32,
    letterSpacing: 4,
    color: "#c43c3c",
    marginBottom: 16,
  },

  subtitle: {
    fontSize: 8,
    letterSpacing: 1,
    color: "#a89878",
  },

  ruleLine: {
    height: 3,
    width: 192,
    backgroundColor: "#3a3a56",
    marginTop: 24,
  },

  gameModeList: {
    width: "100%",
    gap: 16,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    padding: 16,
    backgroundColor: "#1e1e32",
    borderWidth: 3,
    borderColor: "#3a3a56",
  },

  cardPressed: {
    backgroundColor: "#222238",
  },

  iconBox: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0e0e1a",
    borderWidth: 3,
    borderColor: "#3a3a56",
    flexShrink: 0,
  },

  icon: {
    fontSize: 20,
    color: "#c8a040",
  },

  textContainer: {
    flex: 1,
    minWidth: 0,
  },

  cardTitle: {
    fontSize: 14,
    color: "#e4d8c0",
    letterSpacing: 1,
    textTransform: "uppercase",
  },

  description: {
    fontSize: 7,
    color: "#6e6e88",
    marginTop: 8,
    lineHeight: 12,
  },

  arrow: {
    fontSize: 10,
    color: "#6e6e88",
    flexShrink: 0,
  },
});
