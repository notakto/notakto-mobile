import { render, screen } from "@testing-library/react-native";
import PixelText from "@/src/components/PixelText";

describe("PixelText", () => {
  it("renders its children", () => {
    render(<PixelText>HELLO</PixelText>);

    expect(screen.getByText("HELLO")).toBeTruthy();
  });

  it("applies the PressStart2P font", () => {
    render(<PixelText>HELLO</PixelText>);

    expect(screen.getByText("HELLO")).toHaveStyle({ fontFamily: "PressStart2P" });
  });

  it("merges a custom style with the font", () => {
    render(<PixelText style={{ color: "red" }}>HELLO</PixelText>);

    expect(screen.getByText("HELLO")).toHaveStyle({ fontFamily: "PressStart2P", color: "red" });
  });

  it("forwards other Text props", () => {
    render(<PixelText numberOfLines={1}>HELLO</PixelText>);

    expect(screen.getByText("HELLO").props.numberOfLines).toBe(1);
  });
});
