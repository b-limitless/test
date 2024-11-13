import React from "react";
import { Button as MButton } from "@mui/material";
import { colors } from "config/colors";
import { styles, variantType } from "./style";



export interface ButtonInterface {
  variant: variantType;
  text: string;
  [x: string]: any;
}

const Button: React.FC<ButtonInterface> = ({ text, variant, ...rest }) => {
  return (
    <MButton sx={styles(variant)} {...rest}>
      {text}
    </MButton>
  );
};

export default Button;
