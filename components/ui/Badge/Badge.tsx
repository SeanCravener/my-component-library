import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { useTheme } from "../../../hooks/useTheme";
import { Text } from "../index";

interface BadgeProps extends ViewProps {
  label: string;
  variant?: "primary" | "success" | "warning" | "danger";
  size?: "sm" | "md";
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = "primary",
  size = "md",
  style,
  ...props
}) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors[variant],
      borderRadius: theme.borderRadius.round,
      paddingHorizontal: size === "sm" ? theme.spacing.xs : theme.spacing.sm,
      paddingVertical: size === "sm" ? 2 : 4,
      alignSelf: "flex-start",
    },
    text: {
      // Need to change below, just set it to primary for now. Might not even need this since styling is done in the component
      color: theme.colors.text.primary,
      fontSize:
        size === "sm"
          ? theme.typography.fontSize.xs
          : theme.typography.fontSize.sm,
    },
  });

  return (
    <View style={[styles.container, style]} {...props}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};
