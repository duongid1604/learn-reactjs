import { Box, Container, Grid, Paper, Skeleton } from "@mui/material";
import { addToCart } from "features/Cart/cartSlice";
import { useDispatch } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import AddToCartForm from "../components/AddToCartForm";
import ProductDescription from "../components/ProductDescription";
import ProductInfor from "../components/ProductInfor";
import ProductThumbnail from "../components/ProductThumbnail";
import useProductDetail from "../hooks/useProductDetail";

DetailPage.propTypes = {};

function DetailPage() {
  const {
    params: { productID },
  } = useRouteMatch();

  const { product, loading } = useProductDetail(productID);
  const dispatch = useDispatch();

  if (loading) {
    return (
      <Box ml={3}>
        <Skeleton variant="rounded" width={350} height={350} mr={1} />
      </Box>
    );
  }

  const handleAddToCartForm = ({ quantity }) => {
    dispatch(
      addToCart({
        id: product.id,
        product,
        quantity,
      }) 
    );
  };

  return (
    <Box>
      <Container>
        <Paper elevation={0}>
          <Grid container>
            <Grid
              item
              sx={{ width: "400px", borderRight: "1px solid #ccc", p: 1.5 }}
            >
              <ProductThumbnail product={product} />
            </Grid>

            <Grid item sx={{ flex: "1 1 0", p: 1.5 }}>
              <ProductInfor product={product} />
              <AddToCartForm onSubmit={handleAddToCartForm} />
            </Grid>
          </Grid>
        </Paper>
        <ProductDescription product={product} />
      </Container>
    </Box>
  );
}

export default DetailPage;
