import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@mui/material";
import PropTypes from "prop-types";

FilterByService.propTypes = {
  filters: PropTypes.object,
  onChange: PropTypes.func,
};

function FilterByService({ filters = {}, onChange }) {
  const handleChange = (e) => {
    if (!onChange) return;

    const { name, checked } = e.target;
    onChange({ [name]: checked });
  };

  return (
    <Box sx={{ p: 2, borderTop: "1px solid #ccc" }}>
      <Typography mt={1} variant="subtitle2">
        DỊCH VỤ
      </Typography>

      <List>
        {[
          { value: "isPromotion", label: "Có khuyến mại" },
          { value: "isFreeShip", label: "Miễn phí giao hàng" },
        ].map((service) => (
          <ListItem key={service.value} sx={{ p: 0, cursor: "pointer" }}>
            <ListItemText>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={Boolean(filters[service.value])}
                      onChange={handleChange}
                      name={service.value}
                    />
                  }
                  label={service.label}
                />
              </FormGroup>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default FilterByService;
