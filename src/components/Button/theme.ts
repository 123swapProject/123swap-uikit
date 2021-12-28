import { scales, variants } from "./types";

export const scaleVariants = {
  [scales.MD]: {
    height: "48px",
    padding: "16px 48px",
  },
  [scales.SM]: {
    height: "32px",
    padding: "16px 48px",
  },
  [scales.XS]: {
    height: "20px",
    fontSize: "12px",
    padding: "0 8px",
  },
  [scales.NONE]: {
    height: "20px",
    fontSize: "12px",
    padding: "0 40px",
  },
};

export const styleVariants = {
  [variants.PRIMARY]: {
    backgroundImage: "linear-gradient(109.32deg, #EB5757 -12.08%, #F2994A 127.54%)",
    color: "white",
  },
  [variants.SECONDARY]: {
    backgroundImage: "none",
    backgroundColor: "transparent",
    border: "2px solid",
    borderColor: "primary",
    boxShadow: "none",
    color: "primary",
    ":disabled": {
      backgroundColor: "transparent",
    },
  },
  [variants.TERTIARY]: {
    backgroundColor: "tertiary",
    boxShadow: "none",
    color: "contrast",
  },
  [variants.SUBTLE]: {
    backgroundColor: "transparent",
    color: "white",
  },
  [variants.DANGER]: {
    backgroundColor: "failure",
    color: "white",
  },
  [variants.SUCCESS]: {
    backgroundColor: "success",
    color: "white",
  },
  [variants.TEXT]: {
    backgroundColor: "transparent",
    color: "primary",
    boxShadow: "none",
    margin: "0",
  },
  [variants.ACTIVE]: {
    backgroundColor: "textMenu",
    color: "active",
    borderRadius: "50px",
  },
};
