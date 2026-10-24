import { renderHook } from "@testing-library/react-native";
import Toast from "react-native-toast-message";
import { useNavigateGameMode } from "@/src/hooks/useNavigationGameMode";
import { useUser } from "@/src/stores/userStore";

const mockPush = jest.fn();

jest.mock("expo-router", () => ({
  useRouter: () => ({ push: mockPush }),
}));

jest.mock("react-native-toast-message", () => ({
  __esModule: true,
  default: { show: jest.fn() },
}));

const fakeUser = { uid: "abc" } as never;

describe("useNavigateGameMode", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    useUser.setState({ user: null, authReady: false });
  });

  const getNavigate = () => renderHook(() => useNavigateGameMode()).result.current;

  it("navigates straight away when auth is not required", () => {
    getNavigate()("/vsPlayer", false);

    expect(mockPush).toHaveBeenCalledWith("/vsPlayer");
    expect(Toast.show).not.toHaveBeenCalled();
  });

  it("shows a loading toast and does not navigate while auth is loading", () => {
    getNavigate()("/vsComputer", true);

    expect(Toast.show).toHaveBeenCalledWith(
      expect.objectContaining({ type: "custom", text1: "Loading...", visibilityTime: 1500 }),
    );
    expect(mockPush).not.toHaveBeenCalled();
  });

  it("asks the user to sign in when auth is ready but there is no user", () => {
    useUser.setState({ user: null, authReady: true });

    getNavigate()("/vsComputer", true);

    expect(Toast.show).toHaveBeenCalledWith(
      expect.objectContaining({ type: "custom", text1: "Please sign in", visibilityTime: 3500 }),
    );
    expect(mockPush).not.toHaveBeenCalled();
  });

  it("navigates when auth is required and the user is signed in", () => {
    useUser.setState({ user: fakeUser, authReady: true });

    getNavigate()("/liveMatch", true);

    expect(mockPush).toHaveBeenCalledWith("/liveMatch");
    expect(Toast.show).not.toHaveBeenCalled();
  });
});
