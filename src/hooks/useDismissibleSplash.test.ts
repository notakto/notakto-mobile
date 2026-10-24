import { act, renderHook } from "@testing-library/react-native";
import { useDismissibleSplash } from "@/src/hooks/useDismissibleSplash";

describe("useDismissibleSplash", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("starts visible at phase 0", () => {
    const { result } = renderHook(() => useDismissibleSplash());

    expect(result.current.visible).toBe(true);
    expect(result.current.phase).toBe(0);
  });

  it("advances through the phases on a timer", () => {
    const { result } = renderHook(() => useDismissibleSplash());

    act(() => {
      jest.advanceTimersByTime(800);
    });
    expect(result.current.phase).toBe(1);

    act(() => {
      jest.advanceTimersByTime(1400);
    });
    expect(result.current.phase).toBe(2);

    act(() => {
      jest.advanceTimersByTime(1200);
    });
    expect(result.current.phase).toBe(3);
  });

  it("hides when dismissed", () => {
    const { result } = renderHook(() => useDismissibleSplash());

    act(() => {
      result.current.onDismiss();
    });

    expect(result.current.visible).toBe(false);
  });

  it("clears its timers on unmount", () => {
    const { unmount } = renderHook(() => useDismissibleSplash());

    unmount();

    expect(jest.getTimerCount()).toBe(0);
  });
});
