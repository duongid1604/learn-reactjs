import userReducer from "../features/Auth/userSlice";
import cartReducer from "../features/Cart/cartSlice";
import counterReducer from "../features/Counter/counterSlice";

const { configureStore } = require("@reduxjs/toolkit");
const rootReducer = {
  counter: counterReducer,
  user: userReducer,
  cart: cartReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
