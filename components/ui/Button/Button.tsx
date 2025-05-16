import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { useTheme } from "../../../hooks/useTheme";
import { Text } from "../index";

interface ButtonProps extends TouchableOpacityProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  title: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  loading,
  title,
  style,
  ...props
}) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    base: {
      borderRadius: theme.borderRadius.md,
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
    },
    primary: {
      backgroundColor: theme.colors.primary,
    },
    secondary: {
      backgroundColor: theme.colors.secondary,
    },
    outline: {
      backgroundColor: "transparent",
      borderWidth: 1,
      borderColor: theme.colors.primary,
    },
    sm: {
      paddingVertical: theme.spacing.xs,
      paddingHorizontal: theme.spacing.sm,
    },
    md: {
      paddingVertical: theme.spacing.sm,
      paddingHorizontal: theme.spacing.md,
    },
    lg: {
      paddingVertical: theme.spacing.md,
      paddingHorizontal: theme.spacing.lg,
    },
  });

  return (
    <TouchableOpacity
      style={[styles.base, styles[variant], styles[size], style]}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.text.primary} />
      ) : (
        <Text
          variant="body"
          color={variant === "outline" ? "primary" : "secondary"}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};
