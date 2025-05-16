import React from "react";
import { View as RNView, ViewProps as RNViewProps } from "react-native";
import { useTheme } from "../../../hooks/useTheme";
import { Theme } from "../../../theme/theme";

interface ViewProps extends RNViewProps {
  padding?: keyof Theme["spacing"];
  margin?: keyof Theme["spacing"];
  backgroundColor?: keyof Theme["colors"];
}

export const View: React.FC<ViewProps> = ({
  children,
  padding,
  margin,
  backgroundColor = "background",
  style,
  ...props
}) => {
  const { theme } = useTheme();

  return (
    <RNView
      style={[
        padding && {
          padding: theme.spacing[padding],
        },
        margin && {
          margin: theme.spacing[margin],
        },
        {
          backgroundColor:
            typeof theme.colors[backgroundColor] === "string"
              ? (theme.colors[backgroundColor] as string)
              : (theme.colors.background as string),
        },
        style,
      ]}
      {...props}
    >
      {children}
    </RNView>
  );
};
