import { Box, Typography } from "@mui/material";
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from "constants";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  const history = useHistory();
  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER;

  const handleClick = () => {
    history.push(`/products/${product.id}`);
  };

  return (
    <Box
      sx={{ cursor: "pointer" }}
      p={1}
      minHeight="215px"
      onClick={handleClick}
    >
      <Box p={1}>
        <img src={thumbnailUrl} alt={product.name} width="100%" />
      </Box>
      <Typography variant="body2">{product.name}</Typography>
      <Typography variant="body2">
        <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(product.salePrice)}
        </Box>
        {product.promotionPercent ? ` - ${product.promotionPercent}%` : ""}
      </Typography>
    </Box>
  );
}

export default Product;
