import React from "react";
import { View, ViewProps } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useTheme } from "../../../hooks/useTheme";

interface IconProps extends ViewProps {
  name: string;
  size?: number;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color,
  style,
  ...props
}) => {
  const { theme } = useTheme();

  return (
    <View style={style} {...props}>
      <MaterialIcons
        name={name}
        size={size}
        color={color || theme.colors.text.primary}
      />
    </View>
  );
};
