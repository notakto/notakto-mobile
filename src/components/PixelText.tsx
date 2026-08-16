import { Text, type TextProps } from "react-native";

export default function PixelText({ style, ...props }: TextProps) {
  return (
    <Text
      {...props}
      style={[
        {
          fontFamily: "PressStart2P",
        },
        style,
      ]}
    />
  );
}
