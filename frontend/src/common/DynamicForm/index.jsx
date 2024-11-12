import React, { useState } from "react";
import {
  TextField,
  Button,
  Stack,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  Box,
  Grid2,
  FormControl,
  RadioGroup,
  FormLabel,
  Radio,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Save } from "@mui/icons-material";

const DynamicForm = ({
  formData,
  setFormData,
  formSchema,
  handleSubmit,
  validateForm,
  errors,
  saving
}) => {
  return (
    <Box>
      <Grid2 container spacing={2}>
        {formSchema.map((field, index) => {
          const error = errors[field.field];

          return (
            <Grid2 item xs={12} md={field.colSpan} key={index}>
              {field.type === "text" && (
                
                <TextField
                  label={field.label}
                  name={field.field}
                  value={formData[field.field] || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, [field.field]: e.target.value })
                  }
                  fullWidth
                  margin="normal"
                  error={!!error}
                  helperText={error}
                />
              )}

              {field.type === "textarea" && (
                <TextField
                  label={field.label}
                  name={field.field}
                  value={formData[field.field] || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, [field.field]: e.target.value })
                  }
                  multiline
                  rows={4}
                  fullWidth
                  margin="normal"
                  error={!!error}
                  helperText={error}
                  

                />
              )}

              {/* {field.type === "checkbox" && (
                <FormControl component="fieldset" fullWidth margin="normal">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData[field.field] || false}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [field.field]: e.target.checked,
                          })
                        }
                        name={field.field}
                      />
                    }
                    label={field.label}
                  />
                  {error && <FormHelperText error>{error}</FormHelperText>}
                </FormControl>
              )}

              {field.type === "radio" && (
                <FormControl component="fieldset" fullWidth margin="normal">
                  <FormLabel component="legend">{field.label}</FormLabel>
                  <RadioGroup
                    aria-label={field.field}
                    name={field.field}
                    value={formData[field.field] || ""}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [field.field]: e.target.value,
                      })
                    }
                  >
                    {field.options.map((option) => (
                      <FormControlLabel
                        key={option}
                        value={option}
                        control={<Radio />}
                        label={option}
                      />
                    ))}
                  </RadioGroup>
                  {error && <FormHelperText error>{error}</FormHelperText>}
                </FormControl>
              )}

              {field.type === "select" && (
                <FormControl fullWidth margin="normal">
                  <InputLabel>{field.label}</InputLabel>
                  <Select
                    name={field.field}
                    value={formData[field.field] || ""}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        [field.field]: e.target.value,
                      })
                    }
                    error={!!error}
                  >
                    {field.options.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                  {error && <FormHelperText error>{error}</FormHelperText>}
                </FormControl>
              )} */}

              {field.type === "button" && (
                <Grid2 container justifyContent="flex-end">
                  <LoadingButton
                    onClick={handleSubmit}
                    loading={saving}
                    loadingPosition="start"
                    startIcon={<Save />}
                    variant="contained"
                  >
                    Save
                  </LoadingButton>
                
                </Grid2>
              )}
            </Grid2>
          );
        })}
      </Grid2>
    </Box>
  );
};

export default DynamicForm;
