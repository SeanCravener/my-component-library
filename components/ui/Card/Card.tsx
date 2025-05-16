import React from "react";
import { Pressable, StyleSheet, View, ViewProps } from "react-native";
import { useTheme } from "../../../hooks/useTheme";
import { Theme } from "../../../theme/theme";

interface CardProps extends ViewProps {
  onPress?: () => void;
  elevation?: boolean;
  padding?: keyof Theme["spacing"];
}

export const Card: React.FC<CardProps> = ({
  children,
  onPress,
  elevation = true,
  padding = "md",
  style,
  ...props
}) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    card: {
      backgroundColor: theme.colors.surface,
      borderRadius: theme.borderRadius.lg,
      padding: theme.spacing[padding],
      borderWidth: 1,
      borderColor: theme.colors.border,
      ...(elevation && {
        shadowColor: theme.colors.text.primary,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
      }),
    },
  });

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.card,
          {
            opacity: pressed ? 0.9 : 1,
          },
          style,
        ]}
        {...props}
      >
        {children}
      </Pressable>
    );
  }

  return (
    <View style={[styles.card, style]} {...props}>
      {children}
    </View>
  );
};
