import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const getItemFromLocalStorage = () => {
  const productsList = localStorage.getItem("productsList");
  const amount = +localStorage.getItem("productAmount");

  if (productsList) {
    return { productsList: JSON.parse(productsList), amount };
  }
  return {
    productsList: [],
    amount: 0,
  };
};

const setItemToLocalStorage = ({ productsList, amount }) => {
  localStorage.setItem("productsList", JSON.stringify(productsList));
  localStorage.setItem("productAmount", amount);
};

const initialState = getItemFromLocalStorage();

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      state.productsList.push({ ...payload, productAmount: 1 });
      state.amount = state.amount + 1;
      setItemToLocalStorage(state);
    },
    plusProductAmount: (state, { payload }) => {
      state.productsList = state.productsList.map((product) => {
        return product.id === payload
          ? { ...product, productAmount: product.productAmount + 1 }
          : { ...product };
      });
      setItemToLocalStorage(state);
    },

    minusProductAmount: (state, { payload }) => {
      const activeProduct = state.productsList.find((el) => el.id === payload);
      if (activeProduct.productAmount === 1) {
        state.productsList = state.productsList.filter(
          (el) => el.id != payload
        );
        state.amount = state.amount - 1;
        toast.error("Mahsulot bekor qilindi");
      }
      state.productsList = state.productsList.map((product) => {
        return product.id === payload
          ? { ...product, productAmount: product.productAmount - 1 }
          : { ...product };
      });
      setItemToLocalStorage(state);
    },
    removeProduct: (state, {payload}) => {
      state.productsList = state.productsList.filter((el)=> el.id != payload)
      state.amount = state.amount-1
      setItemToLocalStorage(state)
    }
  },
});

export const { addProduct, plusProductAmount, minusProductAmount, removeProduct} =
  productSlice.actions;
export default productSlice.reducer;
