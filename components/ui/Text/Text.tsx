import React from "react";
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
} from "react-native";
import { useTheme } from "../../../hooks/useTheme";

interface TextProps extends RNTextProps {
  variant?: "h1" | "h2" | "h3" | "body" | "caption";
  color?: "primary" | "secondary" | "tertiary";
}

export const Text: React.FC<TextProps> = ({
  children,
  variant = "body",
  color = "primary",
  style,
  ...props
}) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    h1: {
      fontSize: theme.typography.fontSize.xxl,
      fontFamily: theme.typography.fontFamily.bold,
      color: theme.colors.text[color],
    },
    h2: {
      fontSize: theme.typography.fontSize.xl,
      fontFamily: theme.typography.fontFamily.bold,
      color: theme.colors.text[color],
    },
    h3: {
      fontSize: theme.typography.fontSize.lg,
      fontFamily: theme.typography.fontFamily.bold,
      color: theme.colors.text[color],
    },
    body: {
      fontSize: theme.typography.fontSize.md,
      fontFamily: theme.typography.fontFamily.regular,
      color: theme.colors.text[color],
    },
    caption: {
      fontSize: theme.typography.fontSize.sm,
      fontFamily: theme.typography.fontFamily.regular,
      color: theme.colors.text[color],
    },
  });

  return (
    <RNText style={[styles[variant], style]} {...props}>
      {children}
    </RNText>
  );
};
