import type { User } from "firebase/auth";
import { useUser } from "@/src/stores/userStore";

describe("useUser", () => {
  beforeEach(() => {
    useUser.setState({ user: null, authReady: false });
  });

  it("starts signed out and not ready", () => {
    const state = useUser.getState();

    expect(state.user).toBeNull();
    expect(state.authReady).toBe(false);
  });

  it("stores and clears the user", () => {
    const fakeUser = { uid: "abc" } as User;

    useUser.getState().setUser(fakeUser);
    expect(useUser.getState().user).toBe(fakeUser);

    useUser.getState().setUser(null);
    expect(useUser.getState().user).toBeNull();
  });

  it("updates authReady without touching the user", () => {
    const fakeUser = { uid: "abc" } as User;
    useUser.getState().setUser(fakeUser);

    useUser.getState().setAuthReady(true);

    expect(useUser.getState().authReady).toBe(true);
    expect(useUser.getState().user).toBe(fakeUser);
  });
});
