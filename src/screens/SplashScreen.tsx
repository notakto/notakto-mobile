import { useEffect, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import PixelText from "@/src/components/PixelText";

interface SplashScreenProps {
  visible: boolean;
  phase: number;
  onDismiss: () => void;
}

interface DimmedProps {
  dimmed: boolean;
}

function SplashBootText({ dimmed }: DimmedProps) {
  return (
    <PixelText style={[styles.bootText, dimmed && styles.dimmed]}>NOTAKTO SYSTEMS v2.1</PixelText>
  );
}

function SplashSystemCheck({ dimmed }: DimmedProps) {
  return (
    <View style={[styles.systemCheck, dimmed && styles.dimmed]}>
      <PixelText style={styles.successText}>RAM OK ............. 128K</PixelText>
      <PixelText style={styles.successText}>BOARD CHECK ........ PASS</PixelText>
      <PixelText style={styles.successText}>SYSTEM ............. READY</PixelText>
    </View>
  );
}

function SplashTitleBlock() {
  return (
    <View style={styles.titleBlock}>
      <PixelText style={styles.title}>NOTAKTO</PixelText>

      <PixelText style={styles.subtitle}>NO TIES · ALWAYS A WINNER</PixelText>
    </View>
  );
}

interface SplashStartPromptProps {
  onDismiss: () => void;
}

function SplashStartPrompt({ onDismiss }: SplashStartPromptProps) {
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((v) => !v);
    }, 500);

    return () => clearInterval(interval);
  }, []);
  return (
    <View style={styles.promptContainer}>
      <Pressable
        onPress={onDismiss}
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
        <PixelText style={styles.buttonText}>INSERT COIN</PixelText>
      </Pressable>

      <PixelText style={[styles.pressStart, { opacity: blink ? 1 : 0 }]}>PRESS START</PixelText>
    </View>
  );
}

export default function SplashScreen({ visible, phase, onDismiss }: SplashScreenProps) {
  if (!visible) {
    return null;
  }

  return (
    <View style={styles.container}>
      <SplashBootText dimmed={phase > 0} />

      {phase >= 1 && <SplashSystemCheck dimmed={phase > 1} />}

      {phase >= 2 && <SplashTitleBlock />}

      {phase >= 3 && <SplashStartPrompt onDismiss={onDismiss} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0b12",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999,
    elevation: 9999,
  },

  bootText: {
    fontSize: 8,
    color: "#555568",
    marginBottom: 32,
    letterSpacing: 1,
  },

  systemCheck: {
    marginBottom: 32,
    gap: 8,
  },

  successText: {
    fontSize: 8,
    color: "#4ade80",
    letterSpacing: 0.5,
  },

  titleBlock: {
    alignItems: "center",
    marginBottom: 32,
  },

  title: {
    fontSize: 28,
    fontWeight: "900",
    color: "#e54b4b",
    letterSpacing: 2,
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 8,
    color: "#aaa28f",
    letterSpacing: 0.5,
  },

  promptContainer: {
    alignItems: "center",
  },

  button: {
    backgroundColor: "#d9a72e",
    borderWidth: 1,
    borderColor: "#dedede",
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginBottom: 16,
    marginTop: 16,
    elevation: 4,
  },

  buttonPressed: {
    transform: [{ translateX: 2 }, { translateY: 2 }],
    opacity: 0.8,
  },

  buttonText: {
    color: "#0b0b12",
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1,
  },

  pressStart: {
    color: "#d9a72e",
    fontSize: 8,
    letterSpacing: 1,
  },

  dimmed: {
    opacity: 0.4,
  },
});
