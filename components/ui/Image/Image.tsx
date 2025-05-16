import React from "react";
import {
  ActivityIndicator,
  Image as RNImage,
  ImageProps as RNImageProps,
  StyleSheet,
  View,
} from "react-native";
import { useTheme } from "../../../hooks/useTheme";

interface ImageProps extends RNImageProps {
  size?: number;
  rounded?: boolean;
}

export const Image: React.FC<ImageProps> = ({
  size,
  rounded,
  style,
  ...props
}) => {
  const { theme } = useTheme();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  const styles = StyleSheet.create({
    container: {
      overflow: "hidden",
      ...(size && {
        width: size,
        height: size,
      }),
      ...(rounded && {
        borderRadius: size ? size / 2 : theme.borderRadius.round,
      }),
    },
    image: {
      width: "100%",
      height: "100%",
    },
    loadingContainer: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.surface,
    },
  });

  return (
    <View style={[styles.container, style]}>
      <RNImage
        {...props}
        style={styles.image}
        onLoad={() => setLoading(false)}
        onError={() => {
          setError(true);
          setLoading(false);
        }}
      />
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator color={theme.colors.primary} />
        </View>
      )}
    </View>
  );
};
