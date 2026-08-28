import { useRouter } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";
import PixelText from "@/src/components/PixelText";

interface SettingItem {
  icon: string;
  title: string;
  description: string;
  action: string;
}

const SETTINGS: SettingItem[] = [
  {
    icon: "$",
    title: "BUY COINS",
    description: "PURCHASE MORE COINS",
    action: "buyCoins",
  },
  {
    icon: "?",
    title: "TUTORIAL",
    description: "LEARN HOW TO PLAY NOTAKTO",
    action: "tutorial",
  },
  {
    icon: "~",
    title: "SOUND",
    description: "MANAGE SOUND & MUSIC",
    action: "soundConfig",
  },
  {
    icon: "@",
    title: "PROFILE",
    description: "VIEW YOUR PLAYER PROFILE",
    action: "profile",
  },
  {
    icon: "=",
    title: "DOWNLOADS",
    description: "VIEW AVAILABLE DOWNLOADS",
    action: "downloads",
  },
  {
    icon: "!",
    title: "BUG REPORT",
    description: "REPORT A PROBLEM",
    action: "bugReport",
  },
];

export default function Settings() {
  const router = useRouter();

  const handleSettingPress = (action: string) => {
    console.log(action);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Pressable
            onPress={() => router.replace("/")}
            style={({ pressed }) => [styles.backButton, pressed && styles.buttonPressed]}>
            <PixelText style={styles.backIcon}>X</PixelText>
          </Pressable>

          <PixelText style={styles.mainTitle}>SETTINGS</PixelText>
        </View>

        {/* Settings */}
        <View style={styles.settingsList}>
          {SETTINGS.map((item) => (
            <Pressable
              key={item.action}
              onPress={() => handleSettingPress(item.action)}
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0e0e1a",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  content: {
    width: "100%",
    maxWidth: 672,
    paddingHorizontal: 22,
    paddingTop: 30,
  },

  header: {
    width: "100%",
    position: "relative",
  },

  backButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1e1e32",
    borderWidth: 3,
    borderColor: "#3a3a56",
  },

  backIcon: {
    fontSize: 22,
    color: "#e4d8c0",
    textAlign: "center",
  },

  buttonPressed: {
    backgroundColor: "#222238",
  },

  mainTitle: {
    fontSize: 28,
    letterSpacing: 4,
    color: "#c43c3c",
    marginTop: 55,
    marginBottom: 52,
    textAlign: "center",
  },

  settingsList: {
    width: "100%",
    gap: 12,
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
    fontSize: 18,
    color: "#c8a040",
  },

  textContainer: {
    flex: 1,
    minWidth: 0,
  },

  cardTitle: {
    fontSize: 12,
    color: "#e4d8c0",
    letterSpacing: 1,
    textTransform: "uppercase",
  },

  description: {
    fontSize: 7,
    color: "#6e6e88",
    marginTop: 7,
    lineHeight: 11,
  },

  arrow: {
    fontSize: 10,
    color: "#6e6e88",
    flexShrink: 0,
  },
});
