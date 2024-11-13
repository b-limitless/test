import { colors } from "config/colors";

export type variantType = "primary" | "secondary" | "light";

export const styles = (variant: variantType) => {
  let background =
    variant === "primary"
      ? colors.primary
      : variant === "secondary"
      ? colors.secondary
      : variant === "light"
      ? colors.light
      : colors.primary;
  let color =
    variant === "primary"
      ? colors.light
      : variant === "secondary"
      ? colors.primary
      : variant === "light"
      ? colors.primary
      : colors.primary;

  const optionalProps = {} as any;

  if (variant === "light" || variant === "primary") {
    optionalProps.border = `1px solid ${colors.primary}`;
  }

  return {
    background: background,
    borderRadius: "0px",
    padding: "12px 22px",
    color: color,
    opacity: 0.9,
    fontFamily: "Figtree, sans-serif",
    fontSize: "16px",
    lineHeight: "20px",
    "&:hover": {
      backgroundColor: background,
      opacity: 1,
    },
    ...optionalProps,
  };
};