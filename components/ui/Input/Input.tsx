// import React from "react";
// import {
//   StyleProp,
//   TextInput,
//   TextInputProps,
//   TextStyle,
//   ViewStyle,
// } from "react-native";
// import { useTheme } from "../../../hooks/useTheme";
// import { Text, View } from "../index";

// type Variant = "filled" | "outlined" | "unstyled";
// type ColorKey = keyof ReturnType<typeof useTheme>["theme"]["colors"];
// type RadiusKey = keyof ReturnType<typeof useTheme>["theme"]["borderRadius"];

// interface InputProps extends TextInputProps {
//   label?: string;
//   variant?: Variant;
//   color?: ColorKey;
//   radius?: RadiusKey;
//   disabled?: boolean;
//   containerStyle?: StyleProp<ViewStyle>;
//   inputStyle?: StyleProp<TextStyle>;
// }

// export const Input: React.FC<InputProps> = ({
//   label,
//   variant = "filled",
//   color = "primary",
//   radius = "md",
//   disabled = false,
//   containerStyle,
//   inputStyle,
//   ...rest
// }) => {
//   const { theme } = useTheme();

//   const backgroundColor =
//     variant === "filled" ? theme.colors.surfaceContainerLow : "transparent";

//   const borderColor =
//     variant === "outlined" ? theme.colors[color] : "transparent";

//   return (
//     <View style={containerStyle}>
//       {label && (
//         <Text
//           variant="label"
//           fontWeight="medium"
//           color="onSurface"
//           style={{ marginBottom: theme.spacing.xs }}
//         >
//           {label}
//         </Text>
//       )}

//       <TextInput
//         placeholderTextColor={theme.colors.outline}
//         editable={!disabled}
//         style={[
//           {
//             backgroundColor: disabled
//               ? theme.colors.surfaceVariant
//               : backgroundColor,
//             borderWidth: variant === "outlined" ? 1 : 0,
//             borderColor,
//             borderRadius: theme.borderRadius[radius],
//             paddingVertical: theme.spacing.sm,
//             paddingHorizontal: theme.spacing.md,
//             fontSize: theme.typography.fontSize.body,
//             fontFamily: theme.typography.fontFamily.regular,
//             color: theme.colors.onSurface,
//             opacity: disabled ? theme.opacity.disabled : 1,
//           },
//           inputStyle,
//         ]}
//         {...rest}
//       />
//     </View>
//   );
// };
// components/base/Input.tsx
import React from "react";
import {
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  ViewStyle,
} from "react-native";
import { useTheme } from "../../../hooks/useTheme";
import { Text, View } from "../index";
type Variant = "filled" | "outlined" | "unstyled";
type ColorKey = keyof ReturnType<typeof useTheme>["theme"]["colors"];

interface InputProps extends TextInputProps {
  label?: string;
  variant?: Variant;
  color?: ColorKey;
  style?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

export const Input: React.FC<InputProps> = ({
  label,
  variant = "filled",
  color = "primary",
  style,
  containerStyle,
  ...rest
}) => {
  const { theme } = useTheme();

  const baseStyle: TextStyle = {
    color: theme.colors.onSurface,
    fontSize: theme.typography.fontSize.md,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    fontFamily: theme.typography.fontFamily.regular,
    flex: 1,
  };

  const variantStyle: ViewStyle =
    variant === "outlined"
      ? {
          borderWidth: 1,
          borderColor: theme.colors.outline,
          backgroundColor: theme.colors.surface,
        }
      : variant === "filled"
      ? {
          backgroundColor: theme.colors.surfaceVariant,
        }
      : {};

  const containerBaseStyle: ViewStyle = {
    borderRadius: theme.borderRadius.sm,
  };

  return (
    <View style={containerStyle}>
      {label && (
        <Text
          variant="label"
          color="onSurface"
          style={{ marginBottom: theme.spacing.xs }}
        >
          {label}
        </Text>
      )}
      <View style={[containerBaseStyle, variantStyle]}>
        <TextInput
          style={[baseStyle, style]}
          placeholderTextColor={theme.colors.onSurfaceVariant}
          {...rest}
        />
      </View>
    </View>
  );
};
