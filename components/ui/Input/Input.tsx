import React from "react";
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { useTheme } from "../../../hooks/useTheme";
import { Text } from "../index";

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  rightElement?: React.ReactNode;
  containerStyle?: ViewStyle;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  rightElement,
  containerStyle,
  style,
  ...props
}) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      marginBottom: theme.spacing.md,
    },
    label: {
      marginBottom: theme.spacing.xs,
    },
    inputContainer: {
      flexDirection: "row",
      borderWidth: 1,
      borderColor: error ? theme.colors.danger : theme.colors.border,
      borderRadius: theme.borderRadius.md,
      backgroundColor: theme.colors.surface,
    },
    input: {
      flex: 1,
      padding: theme.spacing.sm,
      color: theme.colors.text.primary,
      fontSize: theme.typography.fontSize.md,
    },
    rightElement: {
      justifyContent: "center",
      paddingRight: theme.spacing.sm,
    },
    error: {
      marginTop: theme.spacing.xs,
    },
  });

  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Text variant="caption" color="secondary" style={styles.label}>
          {label}
        </Text>
      )}
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, style]}
          placeholderTextColor={theme.colors.text.secondary}
          {...props}
        />
        {rightElement && (
          <TouchableOpacity style={styles.rightElement}>
            {rightElement}
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <Text variant="caption" style={styles.error}>
          {error}
        </Text>
      )}
    </View>
  );
};
