import React from "react";
import PropTypes from "prop-types";
import { Tab, Tabs } from "@mui/material";

ProductSort.propTypes = {
  currentSort: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

function ProductSort({ currentSort, onChange }) {
  const handleSortChange = (event, newValue) => {
    if (onChange) onChange(newValue);
  };

  return (
    <Tabs value={currentSort} onChange={handleSortChange}>
      <Tab label="Giá thấp đến cao" value="salePrice:ASC"></Tab>
      <Tab label="Giá cao đến thấp" value="salePrice:DESC"></Tab>
    </Tabs>
  );
}

export default ProductSort;