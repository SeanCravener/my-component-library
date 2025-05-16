const lightColors = {
  primary: "#0a7ea4",
  secondary: "#5856d6",
  success: "#34c759",
  danger: "#ff3b30",
  warning: "#ffcc00",
  info: "#5856d6",
  background: "#ffffff",
  surface: "#f2f2f7",
  text: {
    primary: "#000000",
    secondary: "#636366",
    tertiary: "#8e8e93",
  },
  border: "#e5e5ea",
  gray: {
    100: "#f2f2f7",
    200: "#e5e5ea",
    300: "#d1d1d6",
    400: "#c7c7cc",
    500: "#aeaeb2",
    600: "#8e8e93",
    700: "#636366",
    800: "#48484a",
    900: "#3a3a3c",
  },
};

const darkColors = {
  primary: "#0a84ff",
  secondary: "#5e5ce6",
  success: "#32d74b",
  danger: "#ff453a",
  warning: "#ffd60a",
  info: "#5e5ce6",
  background: "#000000",
  surface: "#1c1c1e",
  text: {
    primary: "#ffffff",
    secondary: "#aeaeb2",
    tertiary: "#8e8e93",
  },
  border: "#38383a",
  gray: {
    100: "#1c1c1e",
    200: "#2c2c2e",
    300: "#3a3a3c",
    400: "#48484a",
    500: "#636366",
    600: "#8e8e93",
    700: "#aeaeb2",
    800: "#c7c7cc",
    900: "#d1d1d6",
  },
};

export const theme = {
  light: {
    colors: lightColors,
    spacing: {
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32,
    },
    typography: {
      fontFamily: {
        regular: "System",
        medium: "System-Medium",
        bold: "System-Bold",
      },
      fontSize: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 18,
        xl: 20,
        xxl: 24,
      },
    },
    borderRadius: {
      none: 0,
      sm: 4,
      md: 8,
      lg: 12,
      xl: 16,
      round: 9999,
    },
  },
  dark: {
    colors: darkColors,
    spacing: {
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32,
    },
    typography: {
      fontFamily: {
        regular: "System",
        medium: "System-Medium",
        bold: "System-Bold",
      },
      fontSize: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 18,
        xl: 20,
        xxl: 24,
      },
    },
    borderRadius: {
      none: 0,
      sm: 4,
      md: 8,
      lg: 12,
      xl: 16,
      round: 9999,
    },
  },
};

export type ThemeMode = "light" | "dark";
export type Theme = typeof theme.light;
