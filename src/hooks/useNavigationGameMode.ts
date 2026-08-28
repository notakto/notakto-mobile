import { useRouter } from "expo-router";
import Toast from "react-native-toast-message";
import { useUser } from "@/src/stores/userStore";

export function useNavigateGameMode() {
  const user = useUser((state) => state.user);
  const authReady = useUser((state) => state.authReady);
  const router = useRouter();

  return (mode: string, requiresAuth: boolean) => {
    if (requiresAuth && !authReady) {
      Toast.show({
        type: "custom",
        text1: "Loading...",
        visibilityTime: 1500,
      });

      return;
    }

    if (requiresAuth && authReady && !user) {
      Toast.show({
        type: "custom",
        text1: "Please sign in",
        visibilityTime: 3500,
      });

      return;
    }

    router.push(mode as never);
  };
}
