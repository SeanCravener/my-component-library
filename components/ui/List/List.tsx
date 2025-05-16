import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { useTheme } from "../../../hooks/useTheme";

interface ListProps extends ViewProps {
  children: React.ReactNode;
  rounded?: boolean;
}

export const List: React.FC<ListProps> = ({
  children,
  rounded,
  style,
  ...props
}) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.surface,
      ...(rounded && {
        borderRadius: theme.borderRadius.lg,
        overflow: "hidden",
      }),
    },
  });

  return (
    <View style={[styles.container, style]} {...props}>
      {children}
    </View>
  );
};
