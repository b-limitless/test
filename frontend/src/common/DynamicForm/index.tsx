import { Save } from "@mui/icons-material";
import { Box, Grid2, TextField } from "@mui/material";
import { Input } from "../../components/Input";
import { LoadingButton } from "@mui/lab";

interface FieldSchema {
  field: string;
  label: string;
  type: "text" | "textarea" | "button";
  colSpan: number;
}

interface DynamicFormProps {
  formData: { [key: string]: any };
  setFormData: React.Dispatch<React.SetStateAction<{ [key: string]: any }>>;
  formSchema: FieldSchema[];
  handleSubmit: () => void;
  validateForm: () => boolean;
  errors: { [key: string]: string | undefined };
  saving: boolean;
}

const DynamicForm: React.FC<DynamicFormProps> = ({
  formData,
  setFormData,
  formSchema,
  handleSubmit,
  validateForm,
  errors,
  saving,
}) => {
  return (
    <Grid2 container>
      {formSchema.map((field, index) => {
        const error = errors[field.field];

        return (
          <Grid2
            key={index}
            component="div"
            size={{ xs: 12, md: field.colSpan }}
          >
            {field.type === "text" && (
              <Input
                label={field.label}
                name={field.field}
                value={formData[field.field] || ""}
                onChange={(e: any) =>
                  setFormData({ ...formData, [field.field]: e.target.value })
                }
                fullWidth
                margin="normal"
                error={!!error}
                helperText={error}
              />
            )}

            {field.type === "button" && (
              <Grid2 container justifyContent="flex-end" component="div">
                <LoadingButton
                  onClick={handleSubmit}
                  loading={saving}
                  loadingPosition="start"
                  variant="contained"
                >
                  Signup
                </LoadingButton>
              </Grid2>
            )}
          </Grid2>
        );
      })}
    </Grid2>
  );
};

export default DynamicForm;
