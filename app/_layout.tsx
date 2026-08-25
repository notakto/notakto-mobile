import { PressStart2P_400Regular } from "@expo-google-fonts/press-start-2p";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import Toast, { type ToastConfig } from "react-native-toast-message";
import CustomToast from "@/src/components/CustomToast";
import { useDismissibleSplash } from "@/src/hooks/useDismissibleSplash";
import SplashScreen from "@/src/screens/SplashScreen";

export const toastConfig: ToastConfig = {
  custom: (props) => <CustomToast {...props} />,
};

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
      <Toast config={toastConfig} />
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

  return <RootLayoutContent />;
}
