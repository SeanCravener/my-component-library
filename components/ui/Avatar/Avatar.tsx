import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { useTheme } from "../../../hooks/useTheme";
import { Image, Text } from "../index";

interface AvatarProps extends ViewProps {
  size?: number;
  source?: { uri: string };
  initials?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  size = 40,
  source,
  initials,
  style,
  ...props
}) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor: source ? "transparent" : theme.colors.primary,
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    },
  });

  return (
    <View style={[styles.container, style]} {...props}>
      {source ? (
        <Image source={source} style={styles.container} />
      ) : (
        <Text variant="body">{initials}</Text>
      )}
    </View>
  );
};
