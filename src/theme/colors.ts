import { Colors } from "./types";

export const baseColors = {
  failure: "#ed1b23",
  primary: "#ffca09",
  primaryBright: "#ffee15",
  primaryDark: "#ac9d0f",
  secondary: "#ed1b23",
  success: "#ffffff",
  warning: "#f7941e",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#ffffff",
  secondBackground: "#ffffff",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  dropdown: "#F6F6F6",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#1f1d1e", 
  textMenu: "#777E90",
  textDisabled: "#BDC2C4",
  textSubtle: "#302e2f",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #FFFFFF 0%, #FFFFFF 100%)",
    linear: "-webkit-linear-gradient(109.32deg, #EB5757 -12.08%, #F2C94C 58.46%, #F2994A 127.54%);",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#ed1b23",
  background: "#27262b",
  secondBackground: "#18191D",
  backgroundDisabled: "#777E90",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  invertedContrast: "#191326",
  input: "transparent",
  inputSecondary: "#353945",
  primaryDark: "#b09f14",
  tertiary: "#353945",
  text: "#fff",
  textMenu: "#777E90",
  textDisabled: "#FFF",
  textSubtle: "#f4f9f2",
  borderColor: "#353945",
  card: "#141416",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #1E1D20 0%, #1E1D20 100%)",
    linear: "-webkit-linear-gradient(109.32deg, #EB5757 -12.08%, #F2C94C 58.46%, #F2994A 127.54%);",
  },
};
