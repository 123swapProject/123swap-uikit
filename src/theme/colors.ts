import { Colors } from "./types";

export const baseColors = {
  failure: "#ed1b23",
  primary: "#ffca09",
  primaryBright: "#ffee15",
  primaryDark: "#ac9d0f",
  secondary: "#ed1b23",
  success: "#fff9ff",
  warning: "#f7941e",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#ffffff",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  dropdown: "#F6F6F6",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#1f1d1e",
  textDisabled: "#BDC2C4",
  textSubtle: "#302e2f",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #FFFFFF 0%, #FFFFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#ed1b23",
  background: "#27262b",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  invertedContrast: "#191326",
  input: "#372F47",
  inputSecondary: "#262130",
  primaryDark: "#b09f14",
  tertiary: "#353547",
  text: "#fff8f3",
  textDisabled: "#b2a8a2",
  textSubtle: "#f4f9f2",
  borderColor: "#f7941e",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #1E1D20 0%, #1E1D20 100%)",
  },
};
