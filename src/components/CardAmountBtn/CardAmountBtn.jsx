import React from "react";
import { useDispatch } from "react-redux";
import {
  plusProductAmount,
  minusProductAmount,
} from "../../features/productSlice";

function CardAmountBtn({productsList, product}) {
  const dispatch = useDispatch();

  const plusAmount = (e) => {
    e.preventDefault();
    dispatch(plusProductAmount(product.id));
  };
  const minusAmount = (e) => {
    e.preventDefault();
    dispatch(minusProductAmount(product.id));
  };
  return (
    <div className="w-full bg-gray-400 flex items-center rounded-md px-2 py-2 justify-between">
      <button
        onClick={(e) => minusAmount(e)}
        type="button"
        className="bg-white px-3 rounded-md cursor-pointer text-black"
      >
        -
      </button>
      <p>{productsList.find((el) => el.id === product.id).productAmount}</p>
      <button
        onClick={(e) => plusAmount(e)}
        type="button"
        className="bg-white px-3 rounded-md cursor-pointer text-black"
      >
        +
      </button>
    </div>
  );
}

export default CardAmountBtn;
