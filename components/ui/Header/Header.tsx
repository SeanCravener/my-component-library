import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { useTheme } from "../../../hooks/useTheme";
import { Text } from "../index";

interface HeaderProps extends ViewProps {
  title: string;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  transparent?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  leftElement,
  rightElement,
  transparent,
  style,
  ...props
}) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      height: 56,
      paddingHorizontal: theme.spacing.md,
      backgroundColor: transparent ? "transparent" : theme.colors.surface,
      borderBottomWidth: transparent ? 0 : 1,
      borderBottomColor: theme.colors.border,
    },
    title: {
      flex: 1,
      textAlign: "center",
    },
    element: {
      minWidth: 40,
    },
  });

  return (
    <View style={[styles.container, style]} {...props}>
      <View style={styles.element}>{leftElement}</View>
      <Text variant="h3" style={styles.title}>
        {title}
      </Text>
      <View style={styles.element}>{rightElement}</View>
    </View>
  );
};
