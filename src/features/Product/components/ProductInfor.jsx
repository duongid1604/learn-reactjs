import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { formatVND } from "utils";

ProductInfor.propTypes = {
  product: PropTypes.object,
};

function ProductInfor({ product = {} }) {
  const { name, shortDescription, salePrice, originalPrice, promotionPercent } =
    product;

  return (
    <Box sx={{ pb: 2, borderBottom: "1px solid #ccc" }}>
      <Typography variant="h4">{name}</Typography>
      <Typography mt={2} mb={2} variant="body2">
        {shortDescription}
      </Typography>

      <Box p={2}>
        <Box
          component="span"
          sx={{ mr: 2, fontSize: "36px", fontWeight: "bold" }}
        >
          {formatVND(salePrice)}
        </Box>
        {promotionPercent > 0 && (
          <>
            <Box
              component="span"
              sx={{ mr: 2, fontSize: "18px", textDecoration: "line-through" }}
            >
              {formatVND(originalPrice)}
            </Box>
            <Box component="span" sx={{ fontSize: "18px" }}>
              {`- ${promotionPercent}%`}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}

export default ProductInfor;
