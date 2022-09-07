import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from "constants";
import { useDispatch, useSelector } from "react-redux";
import { formatVND } from "utils";
import { removeFromCart } from "./cartSlice";
import { cartTotalSelector } from "./selector";

CartFeature.propTypes = {};

function CartFeature(props) {
  const dispatch = useDispatch();

  const cartTotal = useSelector(cartTotalSelector);

  const { cartItems } = useSelector((state) => state.cart);

  const thumbnailUrl = cartItems[0].product.thumbnail
    ? `${STATIC_HOST}${cartItems[0].product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER;

  const handleRemoveFromCart = ({idNeedToRemove}) => {
    {console.log(idNeedToRemove);}
    dispatch(
      removeFromCart(
        idNeedToRemove
      )
    );
    
  };

  return (
    <Box>
      <Container>
        <Paper sx={{ p: 2 }} elevation={0}>
          <Typography variant="h5">
            Tổng tiền: {formatVND(cartTotal)}
          </Typography>
          <Grid container>
            <Grid item sx={{ width: "200px", p: 1.5 }}>
              <img
                src={thumbnailUrl}
                alt={cartItems[0].product.name}
                width="100%"
              />
            </Grid>

            <Grid
              item
              sx={{ display: "flex", flexDirection: "column", p: 1.5 }}
            >
              <Typography variant="h6">{cartItems[0].product.name}</Typography>
              <Typography variant="h6">
                Số lượng: {cartItems[0].quantity}
              </Typography>
              <Button
                variant="outlined"
                size="small"
                onClick={handleRemoveFromCart}
              >
                Xóa
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default CartFeature;
