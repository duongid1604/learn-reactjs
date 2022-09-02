import { Box, Button, Input, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";

FilterByPrice.propTypes = {
  onChange: PropTypes.func,
};

function FilterByPrice({ onChange }) {
  const [values, setValues] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (onChange) onChange(values);

    setValues({
      salePrice_gte: 0,
      salePrice_lte: 0,
    });
  };

  return (
    <Box sx={{ p: 2, borderTop: "1px solid #ccc" }}>
      <Typography mb={1} mt={1} variant="subtitle2">
        CHỌN KHOẢNG GIÁ
      </Typography>

      <Box sx={{ display: "flex" }}>
        <Input
          placeholder="0"
          sx={{ mr: 1 }}
          size="small"
          name="salePrice_gte"
          value={values.salePrice_gte || ""}
          onChange={handleChange}
        />
        <span>-</span>
        <Input
          placeholder="0"
          sx={{ ml: 1 }}
          size="small"
          name="salePrice_lte"
          value={values.salePrice_lte || ""}
          onChange={handleChange}
        />
      </Box>

      <Button
        sx={{ mt: 1, mb: 1 }}
        variant="outlined"
        size="small"
        onClick={handleSubmit}
      >
        Áp dụng
      </Button>
    </Box>
  );
}

export default FilterByPrice;
