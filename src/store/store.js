import { configureStore } from "@reduxjs/toolkit";
import productRedeuser from "../features/productSlice";

export const store = configureStore({
  reducer: {
    product: productRedeuser,
  },
});
