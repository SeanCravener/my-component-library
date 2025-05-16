import React from "react";
import { ActivityIndicator, StyleSheet, View, ViewProps } from "react-native";
import { useTheme } from "../../../hooks/useTheme";
import { Text } from "../index";

interface LoadingProps extends ViewProps {
  text?: string;
  fullscreen?: boolean;
}

export const Loading: React.FC<LoadingProps> = ({
  text,
  fullscreen = false,
  style,
  ...props
}) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      padding: theme.spacing.md,
      alignItems: "center",
      justifyContent: "center",
      ...(fullscreen && {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: theme.colors.background,
      }),
    },
    text: {
      marginTop: theme.spacing.sm,
    },
  });

  return (
    <View style={[styles.container, style]} {...props}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
      {text && (
        <Text variant="body" color="secondary" style={styles.text}>
          {text}
        </Text>
      )}
    </View>
  );
};
