import { PressStart2P_400Regular } from "@expo-google-fonts/press-start-2p";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";

import { useDismissibleSplash } from "@/src/hooks/useDismissibleSplash";
import SplashScreen from "@/src/screens/SplashScreen";

function RootLayoutContent() {
  const splash = useDismissibleSplash();

  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />

      {splash.visible && (
        <SplashScreen visible={splash.visible} phase={splash.phase} onDismiss={splash.onDismiss} />
      )}
    </>
  );
}
export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    PressStart2P: PressStart2P_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  <RootLayoutContent />;
}
