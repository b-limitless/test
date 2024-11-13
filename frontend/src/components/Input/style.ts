import { colors } from "config/colors";

export const style: any = {
  "& .MuiTextField-root": { 
    fontFamily: "Poppins, sans-serif !important",
  },
  "&.MuiFormControl-root": {
    width: "100%", 
    
    fontFamily: "Poppins, sans-serif !important",
  },
  "& .MuiInputLabel-root": {
    fontFamily: "Poppins, sans-serif !important",
  },
  "&.MuiInputBase-input": {
    borderRadius: "6px",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "24px",
    letterSpacing: "0.5px",
    color: "rgba(0, 0, 0, 0.87)",
    width: "100%",
    fontFamily: "Poppins, sans-serif !important",
  },
  "& label.Mui-focused": {
    color: colors.primary,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: colors.primary,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: colors.lightGray,
    },
    "&:hover fieldset": {
      borderColor: colors.lightGray,
    },
    "&.Mui-focused fieldset": {
      borderWidth: "1px",
      borderColor: colors.primary,
    },
  },
  "& .MuiFormHelperText-root": {
    fontFamily: "Poppins, sans-serif !important",
  },
};
