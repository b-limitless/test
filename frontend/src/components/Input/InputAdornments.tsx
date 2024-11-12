import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import * as React from "react";
import { style } from "./style";
import { FormHelperText } from "@mui/material";
import { colors } from "../../config/colors";

interface InputAdornmentsProps {
  formControlProps?: any; // You can define a more specific type if you know the structure
  label?: string; // Optional label prop
  error?: boolean; // Optional error prop
  helperText?: string; // Optional helper text prop
  [key: string]: any; // Allow other props
}

export default function InputAdornments({
  formControlProps = {},
  label,
  error,
  helperText,
  ...props
}: InputAdornmentsProps) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <FormControl {...formControlProps} variant="outlined">
      <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
      <OutlinedInput
        {...props}
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      {error && (
        <FormHelperText sx={{ color: `${colors.red}` }}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
}
