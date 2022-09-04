import { Paper } from "@mui/material";
import DOMPurify from "dompurify";
import PropTypes from "prop-types";

ProductDescription.propTypes = {
  product: PropTypes.object,
};

function ProductDescription({ product = {} }) {
  const safeDescription = DOMPurify.sanitize(product.description);

  return (
    <Paper elevation={0} sx={{ mt: 3, mb: 3, p: 3 }}>
      <div dangerouslySetInnerHTML={{ __html: safeDescription }} />
    </Paper>
  );
}

export default ProductDescription;
