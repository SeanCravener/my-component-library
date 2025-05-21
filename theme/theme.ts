// const lightColors = {
//   primary: "#0a7ea4",
//   secondary: "#5856d6",
//   success: "#34c759",
//   danger: "#ff3b30",
//   warning: "#ffcc00",
//   info: "#5856d6",
//   background: "#ffffff",
//   surface: "#f2f2f7",
//   text: {
//     primary: "#000000",
//     secondary: "#636366",
//     tertiary: "#8e8e93",
//   },
//   border: "#e5e5ea",
//   gray: {
//     100: "#f2f2f7",
//     200: "#e5e5ea",
//     300: "#d1d1d6",
//     400: "#c7c7cc",
//     500: "#aeaeb2",
//     600: "#8e8e93",
//     700: "#636366",
//     800: "#48484a",
//     900: "#3a3a3c",
//   },
// };

// const darkColors = {
//   primary: "#0a84ff",
//   secondary: "#5e5ce6",
//   success: "#32d74b",
//   danger: "#ff453a",
//   warning: "#ffd60a",
//   info: "#5e5ce6",
//   background: "#000000",
//   surface: "#1c1c1e",
//   text: {
//     primary: "#ffffff",
//     secondary: "#aeaeb2",
//     tertiary: "#8e8e93",
//   },
//   border: "#38383a",
//   gray: {
//     100: "#1c1c1e",
//     200: "#2c2c2e",
//     300: "#3a3a3c",
//     400: "#48484a",
//     500: "#636366",
//     600: "#8e8e93",
//     700: "#aeaeb2",
//     800: "#c7c7cc",
//     900: "#d1d1d6",
//   },
// };

// export const theme = {
//   light: {
//     colors: lightColors,
//     spacing: {
//       xs: 4,
//       sm: 8,
//       md: 16,
//       lg: 24,
//       xl: 32,
//     },
//     typography: {
//       fontFamily: {
//         regular: "System",
//         medium: "System-Medium",
//         bold: "System-Bold",
//       },
//       fontSize: {
//         xs: 12,
//         sm: 14,
//         md: 16,
//         lg: 18,
//         xl: 20,
//         xxl: 24,
//       },
//     },
//     borderRadius: {
//       none: 0,
//       sm: 4,
//       md: 8,
//       lg: 12,
//       xl: 16,
//       round: 9999,
//     },
//   },
//   dark: {
//     colors: darkColors,
//     spacing: {
//       xs: 4,
//       sm: 8,
//       md: 16,
//       lg: 24,
//       xl: 32,
//     },
//     typography: {
//       fontFamily: {
//         regular: "System",
//         medium: "System-Medium",
//         bold: "System-Bold",
//       },
//       fontSize: {
//         xs: 12,
//         sm: 14,
//         md: 16,
//         lg: 18,
//         xl: 20,
//         xxl: 24,
//       },
//     },
//     borderRadius: {
//       none: 0,
//       sm: 4,
//       md: 8,
//       lg: 12,
//       xl: 16,
//       round: 9999,
//     },
//   },
// };

// export type ThemeMode = "light" | "dark";
// export type Theme = typeof theme.light;

// theme.ts

// ======= COLOR SHADES (Material 3 Structure) ======= //
const primary = {
  0: "#000000",
  10: "#3b1c24",
  20: "#5c2e3a",
  30: "#7e3f51",
  40: "#a05068",
  50: "#c2617f",
  60: "#d496a7", // base
  70: "#e6cbd0",
  80: "#f8f0f2",
  90: "#ffffff",
  95: "#fef7f9",
  99: "#fffbff",
  100: "#ffffff",
};

const secondary = {
  0: "#000000",
  10: "#2e1c3b",
  20: "#3f2e5c",
  30: "#50407e",
  40: "#6150a0",
  50: "#7261c2",
  60: "#a796d4",
  70: "#d0cbe6",
  80: "#f0f0f8",
  90: "#ffffff",
  95: "#fbf8ff",
  99: "#fffbff",
  100: "#ffffff",
};

const tertiary = {
  0: "#000000",
  10: "#1c3b2e",
  20: "#2e5c3f",
  30: "#3f7e50",
  40: "#50a061",
  50: "#61c272",
  60: "#96d4a7",
  70: "#cbe6d0",
  80: "#f0f8f0",
  90: "#ffffff",
  95: "#f6fff9",
  99: "#f9fefc",
  100: "#ffffff",
};

const neutral = {
  0: "#000000",
  10: "#1c1c1c",
  20: "#2e2e2e",
  30: "#404040",
  40: "#525252",
  50: "#646464",
  60: "#969696",
  70: "#c8c8c8",
  80: "#eaeaea",
  90: "#f5f5f5",
  95: "#fafafa",
  99: "#ffffff",
  100: "#ffffff",
};

const neutralVariant = { ...neutral };

// ======= LIGHT & DARK COLOR ROLES ======= //
const commonColors = {
  error: "#B3261E",
  onError: "#FFFFFF",
  errorContainer: "#F9DEDC",
  onErrorContainer: "#410E0B",
  shadow: "#000000",
  scrim: "#000000",
};

const lightColors = {
  ...commonColors,
  primary: primary[60],
  onPrimary: primary[10],
  primaryContainer: primary[90],
  onPrimaryContainer: primary[20],

  secondary: secondary[60],
  onSecondary: secondary[10],
  secondaryContainer: secondary[90],
  onSecondaryContainer: secondary[20],

  tertiary: tertiary[60],
  onTertiary: tertiary[10],
  tertiaryContainer: tertiary[90],
  onTertiaryContainer: tertiary[20],

  background: neutral[99],
  onBackground: neutral[10],
  surface: neutral[99],
  onSurface: neutral[10],
  surfaceVariant: neutralVariant[90],
  onSurfaceVariant: neutralVariant[30],

  surfaceContainer: neutral[95],
  surfaceContainerHigh: neutral[99],
  surfaceContainerLow: neutral[90],
  surfaceContainerLowest: neutral[80],

  outline: neutralVariant[50],
  outlineVariant: neutralVariant[30],
  inverseSurface: neutral[20],
  inverseOnSurface: neutral[95],
  inversePrimary: primary[80],
};

const darkColors = {
  ...commonColors,
  primary: primary[80],
  onPrimary: primary[20],
  primaryContainer: primary[30],
  onPrimaryContainer: primary[90],

  secondary: secondary[80],
  onSecondary: secondary[20],
  secondaryContainer: secondary[30],
  onSecondaryContainer: secondary[90],

  tertiary: tertiary[80],
  onTertiary: tertiary[20],
  tertiaryContainer: tertiary[30],
  onTertiaryContainer: tertiary[90],

  background: neutral[10],
  onBackground: neutral[90],
  surface: neutral[10],
  onSurface: neutral[90],
  surfaceVariant: neutralVariant[30],
  onSurfaceVariant: neutralVariant[80],

  surfaceContainer: neutral[20],
  surfaceContainerHigh: neutral[10],
  surfaceContainerLow: neutral[30],
  surfaceContainerLowest: neutral[0],

  outline: neutralVariant[60],
  outlineVariant: neutralVariant[40],
  inverseSurface: neutral[90],
  inverseOnSurface: neutral[20],
  inversePrimary: primary[40],
};

// ======= TYPOGRAPHY ======= //
const typography = {
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
    display: 32,
    headline: 28,
    title: 22,
    label: 14,
    body: 16,
  },
  lineHeight: {
    tight: 16,
    normal: 20,
    relaxed: 24,
    loose: 28,
  },
};

// ======= SPACING ======= //
const spacing = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
};

// ======= BORDER RADIUS ======= //
const borderRadius = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  xxl: 24,
  round: 9999,
};

// ======= ELEVATION / SHADOWS ======= //
const elevation = {
  level0: {
    shadowColor: "transparent",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  level1: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  level2: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 6,
    elevation: 2,
  },
  level3: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
  level4: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  level5: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 5,
  },
};

// ======= OPACITY ======= //
const opacity = {
  disabled: 0.38,
  medium: 0.6,
  full: 1,
};

// ======= Z-INDEX ======= //
const zIndex = {
  base: 0,
  dropdown: 10,
  sticky: 100,
  modal: 1000,
  toast: 1100,
  tooltip: 1200,
};

// ======= BREAKPOINTS (optional) ======= //
const breakpoints = {
  sm: 320,
  md: 768,
  lg: 1024,
};

// ======= FINAL THEME EXPORT ======= //
export const theme = {
  light: {
    colors: lightColors,
    typography,
    spacing,
    borderRadius,
    elevation,
    opacity,
    zIndex,
    breakpoints,
  },
  dark: {
    colors: darkColors,
    typography,
    spacing,
    borderRadius,
    elevation,
    opacity,
    zIndex,
    breakpoints,
  },
};

// ======= TYPES ======= //
export type ThemeMode = "light" | "dark";
export type Theme = typeof theme.light;

console.log("primary[60]:", primary[60]);
console.log("theme.light.colors.primary:", lightColors.primary);
