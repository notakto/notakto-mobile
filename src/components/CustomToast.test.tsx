import { fireEvent, render, screen } from "@testing-library/react-native";
import type { ComponentProps } from "react";
import CustomToast from "@/src/components/CustomToast";

type ToastProps = ComponentProps<typeof CustomToast>;

const renderToast = (props: Partial<ToastProps> = {}) => {
  const hide = jest.fn();
  render(<CustomToast {...({ hide, ...props } as ToastProps)} />);
  return { hide };
};

describe("CustomToast", () => {
  it("renders the title", () => {
    renderToast({ text1: "Please sign in" });

    expect(screen.getByText("Please sign in")).toBeTruthy();
  });

  it("renders the message when text2 is provided", () => {
    renderToast({ text1: "Title", text2: "Details" });

    expect(screen.getByText("Details")).toBeTruthy();
  });

  it("omits the message when text2 is missing", () => {
    renderToast({ text1: "Title" });

    expect(screen.queryByText("Details")).toBeNull();
  });

  it("calls hide when the dismiss button is pressed", () => {
    const { hide } = renderToast({ text1: "Title" });

    fireEvent.press(screen.getByLabelText("Dismiss notification"));

    expect(hide).toHaveBeenCalledTimes(1);
  });
});
