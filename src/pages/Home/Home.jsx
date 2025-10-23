import React, { useEffect, useState } from "react";
import { request } from "../../utilities/request";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
// import ProductsList from "../../components/ProductsList/ProductsList";
import { ProductsList } from "../../components";

export const loader = async () => {
  try {
    const response = await request.get("products?style=comedy");
    if (!response.status) {
      throw new Error(response.message);
    }
    return response.data;
  } catch (error) {
    toast.error("Xatolik", error.message);
  }
};

function Home() {
  return (
    <div>
      <ProductsList />
    </div>
  );
}

export default Home;
