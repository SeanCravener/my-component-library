// components/base/List.tsx
import React from "react";
import { Pressable, PressableProps, StyleSheet, View } from "react-native";
import { useTheme } from "../../../hooks/useTheme";
import { Text } from "../index";

interface ListItemProps extends PressableProps {
  title: string;
  subtitle?: string;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  divider?: boolean;
}

export const ListItem: React.FC<ListItemProps> = ({
  title,
  subtitle,
  leftElement,
  rightElement,
  divider = true,
  ...props
}) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      padding: theme.spacing.md,
      backgroundColor: theme.colors.surface,
    },
    content: {
      flex: 1,
      marginHorizontal: theme.spacing.sm,
    },
    divider: {
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
  });

  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        divider && styles.divider,
        pressed && { opacity: 0.7 },
      ]}
      {...props}
    >
      {leftElement && leftElement}
      <View style={styles.content}>
        <Text variant="body" color="primary">
          {title}
        </Text>
        {subtitle && (
          <Text variant="caption" color="secondary">
            {subtitle}
          </Text>
        )}
      </View>
      {rightElement && rightElement}
    </Pressable>
  );
};
