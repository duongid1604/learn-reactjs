import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import {
  Box,
  FormControl,
  FormHelperText,
  IconButton,
  OutlinedInput,
  Typography
} from "@mui/material";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";

QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function QuantityField(props) {
  const { form, name, label, disabled } = props;
  const { formState, setValue } = form;
  const { errors } = formState;
  const hasError = !!errors[name];

  return (
    <FormControl
      error={hasError}
      fullWidth
      margin="normal"
      size="small"
      variant="outlined"
    >
      <Typography mb={1}>{label}</Typography>
      <Controller
        name={name}
        control={form.control}
        render={({ field: { onChange, onBlur, value, name } }) => (
          <Box sx={{ width: "150px", display: "flex" }}>
            <IconButton
              onClick={() =>
                setValue(
                  name,
                  Number.parseInt(value) ? Number.parseInt(value) - 1 : 1
                )
              }
            >
              <RemoveCircleOutline />
            </IconButton>

            <OutlinedInput
              id={name}
              value={value}
              // type="number"
              disabled={disabled}
              onChange={onChange}
              onBlur={onBlur}
              sx={{ input: { textAlign: "center" } }}
            />

            <IconButton
              onClick={() =>
                setValue(
                  name,
                  Number.parseInt(value) ? Number.parseInt(value) + 1 : 1
                )
              }
            >
              <AddCircleOutline />
            </IconButton>
          </Box>
        )}
      />
      <FormHelperText>{errors[name]?.message}</FormHelperText>
    </FormControl>
  );
}

export default QuantityField;
