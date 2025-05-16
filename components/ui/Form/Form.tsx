import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { useTheme } from "../../../hooks/useTheme";
import { Theme } from "../../../theme/theme";

interface FormProps extends ViewProps {
  spacing?: keyof Theme["spacing"];
}

export const Form: React.FC<FormProps> = ({
  children,
  spacing = "md",
  style,
  ...props
}) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      gap: theme.spacing[spacing],
    },
  });

  return (
    <View style={[styles.container, style]} {...props}>
      {children}
    </View>
  );
};
