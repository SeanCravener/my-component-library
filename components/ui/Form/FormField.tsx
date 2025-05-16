import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { useTheme } from "../../../hooks/useTheme";
import { Text } from "../index";

interface FormFieldProps extends ViewProps {
  label?: string;
  error?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  children,
  label,
  error,
  style,
  ...props
}) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      gap: theme.spacing.xs,
    },
    error: {
      color: theme.colors.danger,
    },
  });

  return (
    <View style={[styles.container, style]} {...props}>
      {label && <Text variant="caption">{label}</Text>}
      {children}
      {error && (
        <Text variant="caption" style={styles.error}>
          {error}
        </Text>
      )}
    </View>
  );
};
