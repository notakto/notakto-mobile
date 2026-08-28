import { Pressable, StyleSheet, View } from "react-native";
import type { ToastConfigParams } from "react-native-toast-message";

import PixelText from "@/src/components/PixelText";

const CustomToast = ({ text1, text2, hide }: ToastConfigParams<Record<string, never>>) => {
  return (
    <View style={styles.toast}>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <PixelText style={styles.title} numberOfLines={1}>
            {text1}
          </PixelText>

          {text2 && (
            <PixelText style={styles.message} numberOfLines={1}>
              {text2}
            </PixelText>
          )}
        </View>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Dismiss notification"
          onPress={() => hide()}
          style={({ pressed }) => [styles.closeButton, pressed && styles.closeButtonPressed]}>
          <PixelText style={styles.closeText}>×</PixelText>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  toast: {
    width: "90%",
    minHeight: 46,

    backgroundColor: "#1E1E32",

    borderWidth: 2,
    borderColor: "#3D3B55",

    elevation: 8,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.35,
    shadowRadius: 6,

    overflow: "hidden",
    marginTop: 35,
  },

  content: {
    flexGrow: 1,
    minHeight: 42,

    paddingLeft: 14,
    paddingRight: 8,

    flexDirection: "row",
    alignItems: "center",
  },

  textContainer: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    color: "#E4D8C0",

    fontSize: 14,
    lineHeight: 18,

    textAlign: "center",
  },

  message: {
    color: "#E4D8C0",

    fontSize: 10,
    lineHeight: 14,

    marginTop: 2,

    textAlign: "center",
  },

  closeButton: {
    width: 26,
    height: 26,

    marginLeft: 8,

    borderWidth: 1,
    borderColor: "#4A4862",

    backgroundColor: "#24243A",

    alignItems: "center",
    justifyContent: "center",
  },

  closeButtonPressed: {
    opacity: 0.5,
  },

  closeText: {
    color: "#E4D8C0",

    fontSize: 14,
    lineHeight: 17,

    textAlign: "center",
  },
});

export default CustomToast;
