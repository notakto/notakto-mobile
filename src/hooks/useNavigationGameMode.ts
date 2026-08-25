import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { useUser } from "@/src/stores/userStore";

export function useNavigateGameMode() {
  const user = useUser((state) => state.user);
  const navigation = useNavigation();

  return (mode: string, requiresAuth: boolean) => {
    if (requiresAuth && !user) {
      Toast.show({
        type: "custom",
        text1: "Please sign in",
        visibilityTime: 3500,
      });

      return;
    }

    navigation.navigate(mode as never);
  };
}
