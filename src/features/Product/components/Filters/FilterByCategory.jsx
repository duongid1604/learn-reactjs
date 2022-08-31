import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
import categoryApi from "api/categoryApi";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

FilterByCategory.propTypes = {
  onChange: PropTypes.func,
};

function FilterByCategory({ onChange }) {
  const [categoryList, setcategoryList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const list = await categoryApi.getAll();
        setcategoryList(
          list.map((x) => ({
            id: x.id,
            name: x.name,
          }))
        );
      } catch (error) {
        console.log("Fail to fetch category list", error);
      }
    })();
  }, []);

  const handleCategoryClick = (category) => {
    if (onChange) {
      onChange(category.id);
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="subtitle2">DANH SÁCH SẢN PHẨM</Typography>

      <List>
        {categoryList.map((category) => (
          <ListItem
            key={category.id}
            onClick={() => handleCategoryClick(category)}
            sx={{ p: 0, cursor: "pointer" }}
          >
            <ListItemText>
              <Typography variant="body2">{category.name}</Typography>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default FilterByCategory;
