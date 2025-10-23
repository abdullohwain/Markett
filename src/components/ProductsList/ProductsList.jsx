import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductItem from "../ProductItem/ProductItem";

function ProductsList() {
  const data = useLoaderData();
  return (
    <div>
      <div className="container">
        <ul className="grid gap-4 md:gap-6 grid-cols-2 lg:grid-cols-5 sm:grid-cols-3 md:grid-cols-4 ">
          {data.map((item) => {
            return <ProductItem key={item.id} product={item} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProductsList;
