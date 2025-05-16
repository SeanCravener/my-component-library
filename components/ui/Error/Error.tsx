import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { useTheme } from "../../../hooks/useTheme";
import { Button, Text } from "../index";

interface ErrorProps extends ViewProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export const Error: React.FC<ErrorProps> = ({
  title = "Error",
  message = "Something went wrong",
  onRetry,
  style,
  ...props
}) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      padding: theme.spacing.md,
      alignItems: "center",
      justifyContent: "center",
    },
    message: {
      marginTop: theme.spacing.sm,
      marginBottom: theme.spacing.md,
      textAlign: "center",
    },
  });

  return (
    <View style={[styles.container, style]} {...props}>
      <Text variant="h2" color="primary">
        {title}
      </Text>
      <Text variant="body" color="secondary" style={styles.message}>
        {message}
      </Text>
      {onRetry && <Button title="Retry" onPress={onRetry} />}
    </View>
  );
};
