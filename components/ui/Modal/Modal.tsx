import React from "react";
import {
  Dimensions,
  Pressable,
  Modal as RNModal,
  ModalProps as RNModalProps,
  StyleSheet,
  View,
} from "react-native";
import { useTheme } from "../../../hooks/useTheme";
import { Text } from "../index";

interface ModalProps extends Omit<RNModalProps, "transparent"> {
  title?: string;
  onClose?: () => void;
  showCloseButton?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  children,
  title,
  onClose,
  showCloseButton = true,
  ...props
}) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      backgroundColor: theme.colors.surface,
      borderRadius: theme.borderRadius.lg,
      width: Dimensions.get("window").width * 0.9,
      maxWidth: 500,
      maxHeight: Dimensions.get("window").height * 0.9,
      shadowColor: theme.colors.text.primary,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: theme.spacing.md,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    content: {
      padding: theme.spacing.md,
    },
    closeButton: {
      padding: theme.spacing.xs,
    },
  });

  return (
    <RNModal transparent {...props}>
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable style={styles.container}>
          {(title || showCloseButton) && (
            <View style={styles.header}>
              <Text variant="h3">{title}</Text>
              {showCloseButton && (
                <Pressable style={styles.closeButton} onPress={onClose}>
                  <Text color="primary">✕</Text>
                </Pressable>
              )}
            </View>
          )}
          <View style={styles.content}>{children}</View>
        </Pressable>
      </Pressable>
    </RNModal>
  );
};
