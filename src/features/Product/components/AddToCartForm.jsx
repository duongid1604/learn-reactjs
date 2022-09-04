import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button } from "@mui/material";
import QuantityField from "components/form-control/QuantityField";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import * as yup from "yup";

AddToCartForm.propTypes = {
  onSubmit: PropTypes.func,
};

function AddToCartForm({ onSubmit = null }) {
  const schema = yup
    .object({
      quantity: yup
        .number()
        .required("Please enter quantity")
        .min(1, "Minimum value is 1")
        .typeError("Plese enter a number"),
    })
    .required();

  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (value) => {
    if (onSubmit) {
      await onSubmit(value);
    }
  };
  return (
    <Box>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <QuantityField name="quantity" label="Quantity" form={form} />

        <Button type="submit" variant="contained" sx={{ mt: 2, mb: 1, width:"300px" }}>
          Chọn mua
        </Button>
      </form>
    </Box>
  );
}

export default AddToCartForm;
