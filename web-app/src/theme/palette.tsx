import { alpha } from "@mui/material/styles";

// SETUP COLORS

export const customColors = {
  purple_stone: "#5E5364",
  grey_falls: "#A0A0A0",
  gradient: "#7FA7E7 - #8AD7B3",
  yellow: "#F2CB40",
  red: "#F98A8A",
};

export const grey = {
  0: "#FFFFFF",
  100: "#5E5364",
  200: "#9BA6B1",
  300: "#F9F9F9",
  400: "#6A6666",
  500: "#919EAB",
  600: "#A9A9A9",
  700: "#B2B2B2",
  800: "#212B36",
  900: "#000000",
};

export const primary = {
  lighter: "#7FA7E7",
  light: "#7FA7E7",
  main: "#7FA7E7",
  dark: "#588CE0",
  darker: "#588CE0",
  contrastText: "#FFFFFF",
};

export const secondary = {
  lighter: alpha("#8AD7B3", 0.2),
  light: "#8AD7B3",
  main: "#8AD7B3",
  dark: "#4BB081",
  darker: "#4BB081",
  contrastText: "#FFFFFF",
};

export const common = {
  black: "#000000",
  white: "#FFFFFF",
};

const base = {
  primary,
  secondary,
  customColors,
  grey,
  common,
  divider: alpha(grey[500], 0.2),
};

// ----------------------------------------------------------------------

export function palette() {
  return {
    ...base,
    mode: "light",
  };
}
